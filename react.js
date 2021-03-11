/* eslint-disable strict */

'use strict';

const eslintrc = require('./.eslintrc');

module.exports = {
  ...eslintrc,
  extends: [...eslintrc.extends, 'plugin:react/recommended'],
  parserOptions: {
    ...eslintrc.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [...eslintrc.plugins, 'react'],
  rules: {
    ...eslintrc.rules,

    'react/react-in-jsx-scope': 0,

    'react/no-children-prop': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-key': 0,
    'react/jsx-no-target-blank': 0,
    'react/prop-types': 1,
  },
};
