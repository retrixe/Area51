module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', {
    corejs: 3,
    targets: { node: true }, // Target the running Node.js version for optimal performance.
    useBuiltIns: 'usage'
  }]],
  plugins: ['@babel/plugin-transform-modules-commonjs']
}
