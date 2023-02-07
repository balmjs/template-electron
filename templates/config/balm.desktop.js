const getAfterTask = require('./balm.after-task');

const config = {
  roots: {
    source: 'app/desktop'
  },
  paths: {
    target: {
      js: 'desktop'
    }
  },
  scripts: {
    entry: './app/desktop/main.js',
    target: 'electron-main',
    webpackOptions: {
      /**
       * Disables webpack processing of __dirname and __filename.
       * If you run the bundle in node.js it falls back to these values of node.js.
       * https://github.com/webpack/webpack/issues/2010
       */
      node: {
        __dirname: false,
        __filename: false
      }
    }
  }
};

const api = (mix) => {
  if (mix.env.isProd) {
    mix.copy('app/package.json', 'dist');
    mix.remove('build');
  }
};

module.exports = (balm) => {
  return {
    config,
    api,
    afterTask: getAfterTask(balm)
  };
};
