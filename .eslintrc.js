module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used"
    }],
    "no-mixed-operators": [
      "off"
    ],
    "no-var": [
      "off"
    ],
    "react/jsx-filename-extension": [
      "off"
    ]
  }
};
