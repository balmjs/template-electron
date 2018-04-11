// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html

var balm = require('balm');
var packager = require('electron-packager');
var packagerConfig = require('./packager.config');

balm.config = {
  server: {
    open: false,
    localOnly: true
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'css',
      js: 'js',
      img: 'images',
      font: 'fonts'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      renderer: './app/js/renderer/index.js',
      main: './app/js/main.js'
    },
    target: 'electron-renderer',
    webpack: {
      node: {
        __dirname: false
      }
    }
  }
  // More Config
};

balm.afterTask = () => {
  if (balm.config.production) {
    // asar.createPackage('./dist', 'app.asar', function () {
    //   console.log(`app.asar has been created.`);
    // });
    packager(packagerConfig, function done_callback(err, appPaths) {
      console.log('done.');
    });
  } else {
    require('child_process').exec('npm start');
  }
};

balm.go();
