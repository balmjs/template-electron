const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

// 可选: 关闭警告.
// 但是建议不要关闭警告. 如果有需求可以启用下面被注释的代码
// if (isDev) {
//   delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
//   process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
// }

const INDEX = isDev
  ? 'http://localhost:3000'
  : `file://${path.join(__dirname, '..', 'index.html')}`;

module.exports = { isDev, isProd, INDEX };
