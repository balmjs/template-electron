// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
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
