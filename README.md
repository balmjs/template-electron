# BalmJS template - `electron`

> An Electron app boilerplate with BalmJS.

## Requirements

```sh
yarn global add balm-core balm-cli
# OR
npm install -g balm-core balm-cli
```

```sh
# Verify
balm -V

# Output:
# balm-cli: 2.0.0
# balm-core: 3.0.0
```

## Installation

```sh
balm init electron my-project

cd my-project
yarn
# or
npm i
```

## Enjoy

```sh
# For development
npm run dev

# For production
npm run prod
```

## FAQ

> `ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/` for `electron@6`

Q:

```sh
UnhandledPromiseRejectionWarning: HTTPError: Response code 404 (Not Found) for `https://npm.taobao.org/mirrors/electron/v6.1.9/electron-v6.1.9-darwin-x64.zip`
```

A:

- Edit `node_modules/@electron/get/dist/cjs/artifact-utils.js`

```js
// line 39
// const path = mirrorVar('customDir', opts, details.version).replace('{{ version }}', details.version.replace(/^v/, ''));
const path = mirrorVar("customDir", opts, details.version.replace("v", ""));
```

- thx [BalmJS](https://balm.js.org/)
