const getAfterTask = require('./balm.after-task');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
const config = {
  roots: {
    source: 'app/web',
    target: 'dist/web'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      renderer: './app/web/scripts/renderer.js'
    },
    target: 'electron-renderer'
  }
  // More Config
};

module.exports = (balm) => {
  return {
    config,
    afterTask: getAfterTask(balm)
  };
};
