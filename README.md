# BalmJS template - electron

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
UnhandledPromiseRejectionWarning: HTTPError: Response code 404 (Not Found)
```

A:

- Edit `node_modules/@electron/get/dist/cjs/artifact-utils.js`

```js
// line 39
// var path = mirrorVar("customDir", opts, details.version);
var path = mirrorVar("customDir", opts, details.version.replace("v", ""));
```

> thx [BalmJS](https://balmjs.com/)
