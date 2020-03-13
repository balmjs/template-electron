# BalmJS template - `electron`

> An Electron app boilerplate with BalmJS.

## Installation

```sh
npm install -g balm-cli

balm init electron my-project

cd my-project

npm install
```

## Enjoy

```sh
# For development
npm run dev

# For production
npm run prod
```

## FAQ

> `ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/` for China

Q:

```sh
UnhandledPromiseRejectionWarning: HTTPError: Response code 404 (Not Found) for `https://npm.taobao.org/mirrors/electron/v6.1.9/electron-v6.1.9-darwin-x64.zip`
```

A:

- Edit `node_modules/@electron/get/dist/cjs/artifact-utils.js`

```js
// line 39
// const path = mirrorVar('customDir', opts, details.version).replace('{{ version }}', details.version.replace(/^v/, ''));
const path = mirrorVar('customDir', opts, details.version.replace('v', ''));
```

- thx [BalmJS](https://balmjs.com/)
