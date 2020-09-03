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
      node: {
        __dirname: false
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
