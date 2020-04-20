const { exec } = require('child_process');
const balm = require('balm');
const packager = require('electron-packager');
const packagerConfig = require('./packager.config');

async function bundleElectronApp(options) {
  const appPaths = await packager(options);
  console.log(`Electron app bundles created: ${appPaths.join('\n')}`);
}

function afterTask() {
  if (balm.config.env.isProd) {
    bundleElectronApp(packagerConfig);
  } else {
    exec('npm start');
  }
}

module.exports = afterTask;
