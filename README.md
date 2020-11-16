# build-info-webpack-plugin

> Expose build specific information in global variables for debugging.

[![NPM Version](http://img.shields.io/npm/v/build-info-webpack-plugin.svg?style=flat)](https://www.npmjs.org/package/build-info-webpack-plugin)

## Install

```bash
$ npm install build-info-webpack-plugin
```

## Usage

_webpack.config.js_

```javascript
const BuildInfoPlugin = require('build-info-webpack-plugin');

module.exports = {
    plugins: [BuildInfoPlugin]
};
```

_package.json_

This plugin stores the latest build number in `package.json` so that it can be incremented upon subsequent builds. If the `buildNumber` property does not exist, `package.json` will not be modified.

```json
{
  ...
  "buildNumber": 0,
  ...
}
```

_src/js/app.js_

```javascript
console.log(__BUILD_NUMBER__); // 1
console.log(__BUILD_UUID__); // eeabc64a-43d2-4284-8684-2e75a151e3af
console.log(__BUILD_DATE__); // 11/16/2020, 1:21:26 AM
console.log(__BUILD_COMMIT_HASH__); // 87326daf059935dd6f078700261714de413342d3
```
