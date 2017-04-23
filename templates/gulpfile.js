const balm = require('balm');
const webpack = require('webpack');
const packager = require('electron-packager');
const packagerConfig = require('./packager.config');
const path = require('path');

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
  html: {
    replacement: {
      begin: './'
    }
  },
  scripts: {
    entry: {
      'renderer': './app/js/renderer/index',
      'main': './app/js/main'
    },
    target: 'electron-renderer',
    extends: {
      node: {
        __dirname: false
      }
    }
  }
};

balm.go(function (mix) {
  if(balm.config.production){
    mix.copy('./app/package.json', './dist');
    mix.end(function () {
      // asar.createPackage('./dist', 'app.asar', function () {
      //   console.log(`app.asar has been created.`);
      // });
      packager(packagerConfig, function done_callback (err, appPaths) {
        console.log('done.');
      })
    });

  } else {

    mix.end(function () {
      require('child_process').exec('npm start');
    });

  }
});
