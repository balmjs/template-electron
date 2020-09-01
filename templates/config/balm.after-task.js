const { exec } = require('child_process');
const packager = require('electron-packager');
const packagerConfig = require('./packager.config');

async function bundleElectronApp(options) {
  const appPaths = await packager(options);
  console.log(`Electron app bundles created:\n${appPaths.join('\n')}`);
}

function getAfterTask(balm) {
  return () => {
    if (balm.config.env.isProd) {
      bundleElectronApp(packagerConfig);
    } else {
      exec('npm start');
    }
  };
}

module.exports = getAfterTask;
