// electron-packager API:
// https://electron.github.io/electron-packager/
module.exports = {
  dir: './dist',
  out: './build',
  asar: true,
  arch: 'x64',
  platform: 'darwin',
  overwrite: true
};
