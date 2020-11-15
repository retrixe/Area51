import fs from 'fs'
import Koa from 'koa'
import path from 'path'
import send from 'koa-send'
import crypto from 'crypto'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'
import serveClient from './client'
import config from '../config.json'

// Create a Koa server.
const app = new Koa()
const router = new Router()

// Object containing login tokens that were generated.
const tokens = {}
// Setup front-end.
serveClient(router, tokens)

// Setup API for client-side hydration.
router.post('/api/login', async ctx => {
  ctx.append('Content-Type', 'application/json')
  const body = ctx.request.body
  if (!body || typeof body.username !== 'string' || typeof body.password !== 'string') {
    ctx.status = 400
    ctx.body = { error: 'No username or password!' }
  } else if (config.users[body.username]) {
    const hash = crypto.createHash('sha256')
    hash.update(body.password)
    if (hash.digest().toString('hex') === config.users[body.username]) {
      ctx.status = 200
      const token = crypto.randomBytes(16).toString('hex')
      tokens[token] = body.username
      setTimeout(() => { delete tokens[token] }, (24 * 60 * 60 * 1000) + 60000) // 1 second delay.
      ctx.body = { token }
      // TODO: secure: true! Auto-generate HTTPS certs.
      ctx.cookies.set('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
      return
    }
  }
  ctx.status = 403
  ctx.body = { error: 'Invalid username or password!' }
})

router.get('/api/verify', async ctx => {
  const token = ctx.cookies.get('token')
  ctx.append('Content-Type', 'application/json')

  // A lot of compact code which sets response status code and body based on validity of token.
  ctx.status = token ? (tokens[token] ? 200 : 403) : 401
  if (token && tokens[token]) ctx.body = { success: true }
  else if (token) ctx.body = { error: 'Your token is invalid!' }
  else ctx.body = { error: 'No token cookie was on your request!' }
})

router.get('/api/file/:path*', async ctx => {
  const token = ctx.cookies.get('token')
  if (!token) {
    ctx.append('Content-Type', 'application/json')
    ctx.status = 401
    ctx.body = { error: 'No token cookie was on your request!' }
  } else if (!tokens[token]) {
    ctx.append('Content-Type', 'application/json')
    ctx.status = 403
    ctx.body = { error: 'Your token is invalid!' }
  } else {
    // Authentication passed! Moving on...
    const filepath = path.join(config.folder, ctx.params.path || '')
    const relative = path.relative(config.folder, filepath)
    if (!relative || relative.startsWith('..')) {
      ctx.status = 403
      ctx.body = { error: 'This path is outside the authorised area!' }
      return
    }
    try {
      if (!(await fs.promises.lstat(filepath)).isFile()) {
        ctx.status = 400
        ctx.body = { error: 'This path does not point to a file!' }
        return
      }
      await send(ctx, ctx.params.path, {
        hidden: true,
        root: config.folder,
        setHeaders: res => res.setHeader('Content-Disposition', 'attachment')
      })
    } catch (e) {
      if (e.statusCode === 404 || e.code === 'ENOENT') {
        ctx.status = 404
        ctx.append('Content-Type', 'application/json')
        ctx.body = { error: 'This file does not exist!' }
      } else { // 500 status code is automatically set.
        ctx.append('Content-Type', 'application/json')
        ctx.body = { error: 'Internal Server Error!' }
        console.error(e)
      }
    }
  }
})

router.get('/api/files/:path*', async ctx => {
  const token = ctx.cookies.get('token')
  if (!token) {
    ctx.append('Content-Type', 'application/json')
    ctx.status = 401
    ctx.body = { error: 'No token cookie was on your request!' }
  } else if (!tokens[token]) {
    ctx.append('Content-Type', 'application/json')
    ctx.status = 403
    ctx.body = { error: 'Your token is invalid!' }
  } else {
    // Authentication passed! Moving on...
    const filepath = path.join(config.folder, ctx.params.path || '')
    const relative = path.relative(config.folder, filepath)
    if (relative.startsWith('..')) {
      ctx.status = 403
      ctx.body = { error: 'This path is outside the authorised area!' }
      return
    }
    try {
      if (!(await fs.promises.lstat(filepath)).isDirectory()) {
        ctx.status = 400
        ctx.body = { error: 'This path does not point to a folder!' }
        return
      }
    } catch (e) {
      if (e.code === 'ENOENT') {
        ctx.status = 404
        ctx.body = { error: 'This folder does not exist!' }
        return
      } else {
        ctx.status = 500
        ctx.body = { error: 'Internal Server Error!' }
        return
      }
    }
    const contents = await fs.promises.readdir(filepath, { withFileTypes: true })
    ctx.status = 200
    ctx.body = contents.map(dirent => ({
      name: dirent.name,
      file: dirent.isFile(),
      folder: dirent.isDirectory(),
      symlink: dirent.isSymbolicLink()
    }))
  }
})

// Setup Koa router and body parser.
app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())

// Get port.
const port = process.env.AREA51_PORT || config.port || 3000
app.listen(port, (err) => {
  if (err) return console.error(err)
  console.log(`> Listening on port ${port}!`)
})
