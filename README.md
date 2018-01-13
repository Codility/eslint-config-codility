# eslint-config-codility
Codility's shared ESLint config.

## Usage
1. Install the package: `yarn add @codility/eslint-config-codility -D -E`
2. Install peer dependencies
3. Add `.eslintrc.js` file:
```
/* eslint-disable strict */

'use strict';

module.exports = {
  extends: ['@codility/eslint-config-codility'],
};
```
4. Add `scripts` to your `package.json`:
```
"lint": "eslint .",
"lint:fix": "yarn lint -- --fix"
```
5. Run lint with `yarn lint`
6. Let the tool fix your code: `yarn lint:fix`

## Warnings vs errors rationale

Rules for setting up the rules:

- 0 (off):
  - we don't care about the rule
  - we really don't
- 1 (warn):
  - the code can run, but we don't want it on production
  - stylistic errors
- 2 (error):
  - the code can't run
  - the code can run, but the behaviour might be unexpected
  - the code can run, but it contains a typo for sure
