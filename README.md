# eslint-config-codility

Codility's shared ESLint config.

## Usage

1. Install the package: `yarn add @codility/eslint-config-codility --dev --exact`
2. Install peer dependencies and optional dependencies if needed
3. Add `.eslintrc.js` file:
  * For the vanilla JS version use this:
  ```
  /* eslint-disable strict */

  'use strict';

  module.exports = {
      extends: ['@codility/eslint-config-codility'],
  };
  ```
  * For the React version use this:
  ```
  /* eslint-disable strict */

  'use strict';

  module.exports = {
      extends: ['@codility/eslint-config-codility/react'],
  };
  ```
4. Add `scripts` to your `package.json`:
```
"lint": "eslint .",
"lint:fix": "yarn lint -- --fix"
```
5. Run lint with `yarn lint`
6. Let the tool fix your code: `yarn lint:fix`

## Migrating to v.2

Previously the only version available included React plugins and had React as a peer dependency, which was annoying for projects that didn't involve it. That version is now available as `@codility/eslint-config-codility/react` - simply add `/react` at the end.

## Warnings vs errors rationale

Rules for setting up the rules:

- 0 (off):
  - we don't care about the rule
  - we really don't
- 1 (warn):
  - the code can run, but we don't want it on production (e.g. `console.log` or `debugger`)
  - stylistic errors
- 2 (error):
  - the code can't run
  - the code can run, but the behaviour might be unexpected
  - the code can run, but it contains a typo for sure
