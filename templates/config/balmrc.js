// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
module.exports = {
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
