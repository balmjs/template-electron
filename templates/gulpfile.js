const balm = require('balm');
const config = require('./config/balmrc');
const afterTask = require('./config/balm.after-task');

balm.config = config;
balm.afterTask = afterTask;

balm.go();
