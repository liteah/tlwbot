module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    eqeqeq: ['off'],
    'prefer-const': ['off'],
    'arrow-body-style': 'off'
  },
  plugins: {
    'prettier': {
      "tabWidth": 2,
      "semi": false,
      "singleQuote": true,
      "bracketSpacing": true,
      "endOfLine": "auto"
    }
  }
}