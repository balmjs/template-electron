const config = require('./config/balmrc');
const getAfterTask = require('./config/balm.after-task');

module.exports = (balm) => {
  return {
    config,
    afterTask: getAfterTask(balm)
  };
};
