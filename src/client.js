import React from 'react'
import Files from './client/files'
import Login from './client/login'
import theme from './client/theme'
const fs = require('fs')
const path = require('path')
const send = require('koa-send')
const Router = require('@koa/router') // eslint-disable-line no-unused-vars
const ReactDOMServer = require('react-dom/server')
const { access, readFile } = require('fs').promises
const { StaticRouter, Switch, Route } = require('react-router-dom')
const { ServerStyleSheets, ThemeProvider } = require('@material-ui/core/styles')
const config = require('../config.json')

// Set NODE_ENV, else Material-UI generates classes in dev mode, causing client and server mismatch.
if (process.env.NODE_ENV !== 'development') process.env.NODE_ENV = 'production'

const ssr = async (url, initialFiles) => {
  // Do a server-side render.
  const sheets = new ServerStyleSheets()
  const element = (
    <ThemeProvider theme={theme}>
      <StaticRouter location={url}>
        <Switch>
          <Route path='/files/:path*'><Files initialFiles={initialFiles} /></Route>
          <Route path='/'><Login /></Route>
        </Switch>
      </StaticRouter>
    </ThemeProvider>
  )
  const renderStr = ReactDOMServer.renderToString(sheets.collect(element))
  const css = sheets.toString()

  // Read file and begin injection.
  const html = await readFile(path.join(__dirname, '..', 'dist', 'index.html'), { encoding: 'utf8' })
  const ssrHtml = html.replace('<div id="app"></div>', `<div id="app">${renderStr}</div>`)
    .replace('<style id="jss-server-side"></style>', `<style id="jss-server-side">${css}</style>`)
  if (!initialFiles) return ssrHtml
  return ssrHtml.replace(
    '<script id="injected">',
    `<script id="injected">window.initialFiles = JSON.parse('${JSON.stringify(initialFiles)}')`
  )
}

/**
 * Sets up routes to serve a client.
 * @param {Router<any, {}>} router A Koa router.
 * @param {Object} tokens An object full of tokens.
 */
module.exports = (router, tokens) => {
  // This needs to be higher priority.
  // Serve the path files, every time, it will be index.html sent back to the client.
  router.get('/files/:file*', async ctx => {
    if (!tokens[ctx.cookies.get('token')]) {
      ctx.cookies.set('token', 'deleted', { expires: new Date(0) })
      return ctx.redirect('/')
    }

    const filepath = path.join(config.folder, ctx.params.path || '')
    const relative = path.relative(config.folder, filepath)
    try {
      if (relative.startsWith('..') || !(await fs.promises.lstat(filepath)).isDirectory()) {
        throw new Error('This request points to a file, or is outside the configured directory!')
      }
    } catch (e) {
      ctx.body = await ssr(ctx.url) // TODO: Maybe we shouldn't take it so lightly.
      ctx.status = 200
      return
    }
    const contents = await fs.promises.readdir(filepath, { withFileTypes: true })
    const initialFiles = contents.map(dirent => ({
      name: dirent.name,
      file: dirent.isFile(),
      folder: dirent.isDirectory(),
      symlink: dirent.isSymbolicLink()
    }))
    ctx.body = await ssr(ctx.url, initialFiles)
    ctx.status = 200
  })

  // Serve all the Area51 files.
  router.get('/:file?', async ctx => {
    // Determine what file to send.
    let file = !ctx.params.file || ctx.params.file === '/' ? 'index.html' : ctx.params.file
    const folder = file === 'icon.png' ? 'src' : 'dist'
    try {
      await access(path.join(__dirname, '..', folder, file), fs.constants.F_OK)
    } catch (e) { file = 'index.html' }

    // SSR.
    if (file === 'index.html' && tokens[ctx.cookies.get('token')] && !ctx.url.startsWith('/files')) {
      return ctx.redirect('/files')
    } else if (file === 'index.html') {
      ctx.status = 200
      ctx.body = await ssr(ctx.url)
      return
    }

    // For better caching (this is a file explorer, after all).
    const js = /.[a-zA-Z0-9]{20}.js$/.test(file)
    ctx.append('X-Content-Type-Options', 'nosniff')
    return await send(ctx, file, {
      root: path.join(__dirname, '..', folder), maxage: js ? 31536000000 : 0, immutable: js
    })
  })
}
