const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const html = (head, body) => (`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Use minimum-scale=1 to enable GPU rasterization -->
  <meta
    name='viewport'
    content='user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height'
  />
  <title>Area51</title>
  <meta property='og:type' content='website' />
  <meta property='og:title' content='Area51' />
  <meta property='og:image' content='/icon.png' />
  <meta property='og:description' content='A secure file server for HTTP(S).' />
  <meta name='Description' content='A secure file server for HTTP(S).'} />
  <meta name='robots' content='noindex,nofollow' />
  <meta name='theme-color' content='#43d98e' />
  <link rel='icon' href='/icon.png' />
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
  <style id="jss-server-side"></style>
  <script id="injected"></script>
  ${head}
</head>
<body>
  <div id="app"></div>
  ${body}
</body>
</html>
`)
const isDev = env => (
  (env && env.NODE_ENV === 'development') ||
  process.env.NODE_ENV === 'development'
)

module.exports = env => ({
  entry: './src/client/index.js',
  mode: isDev(env) ? 'development' : 'production',
  devtool: isDev(env) ? 'inline-source-map' : undefined,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(c|m)?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', ['@babel/preset-env', {
            corejs: 3,
            targets: 'defaults',
            useBuiltIns: 'usage'
          }]]
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      publicPath: '/',
      templateContent: ({ htmlWebpackPlugin: { tags } }) => html(tags.headTags, tags.bodyTags)
    }),
    new CompressionWebpackPlugin(),
    new CompressionWebpackPlugin({ filename: '[path][base].br', algorithm: 'brotliCompress' })
  ],
  // Chunk splitting optimization.
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})
