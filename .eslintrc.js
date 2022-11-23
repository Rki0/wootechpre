module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'operator-linebreak': ['error', 'before'],
  },
};
