const config = require('./config/balmrc');
const getAfterTask = require('./config/balm.after-task');

const api = (mix) => {
  if (mix.env.isProd) {
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
