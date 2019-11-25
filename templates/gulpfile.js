const path = require('path');
const balm = require('balm');
const packager = require('electron-packager');
const packagerConfig = require('./packager.config');
const { exec } = require('child_process');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
balm.config = {
  server: {
    localOnly: true
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'css',
      js: 'js'
    }
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      main: './app/js/main.js',
      renderer: './app/js/renderer.js'
    },
    target: 'electron-renderer',
    webpackOptions: {
      node: {
        __dirname: false
      }
    }
  }
  // More Config
};

async function bundleElectronApp(options) {
  const appPaths = await packager(options);
  console.log(`Electron app bundles created: ${appPaths.join('\n')}`);
}

balm.afterTask = () => {
  if (balm.config.env.isProd) {
    // asar.createPackage('./dist', 'app.asar', function () {
    //   console.log(`app.asar has been created.`);
    // });
    bundleElectronApp(packagerConfig);
  } else {
    exec('npm start');
  }
};

balm.go(mix => {
  if (mix.env.isProd) {
    mix.remove('build');
  }
});
