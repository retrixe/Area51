module.exports = {
  env: {
    es6: true,
    meteor: true
  },
  parser: "babel-eslint",
  plugins: ["react", "meteor", "flowtype"],
  extends: [
    "plugin:meteor/recommended",
    "plugin:flowtype/recommended",
    "standard", "standard-react"
  ],
  rules: {
    "meteor/audit-argument-checks": "off"
  }
}