# Changelog
## 6.0.1

- Updated LICENSE copyright year.
- Removed `lint` scripts from `package.json`.
- Updated repo URL in `package.json`.

## 6.0.0
### General
The `src` folder is now included when publishing to NPM for better developer experience and debugging.

### Dependencies

- Added `@types/node` dev dependency.
- Added `typescript` dev dependency.
- Removed `@donutteam/eslint-config` dev dependency.
- Removed `eslint` dev dependency.
- Updated other dependencies.

### Features

- All render functions are **no longer async**.
	- Using this proved to be a mess in practice and if you think you need it, you are probably doing something wrong.
- Removed `CallbackChild`.  
	- Using this also proved to be a mess in practice.
    - This also means the `context` argument to various external and internal methods was removed.
- Removed `DocumentElement.create`.

### Tests

- Removed the "should support an array of strings as a shorthand for a class attribute with multiple classes" test.
	- This feature was removed in a previous version so testing for it is pointless.
- Updated all other tests to reflect the changes made in this version as well as various previous versions.