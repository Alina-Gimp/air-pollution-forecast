
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //'plugin:react/recommended',
    //'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "no-param-reassign": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-shadow": "off",
  },


};
