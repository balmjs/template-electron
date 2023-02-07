import { URL } from 'url';
import path from 'path';
import { isDev } from './config';

export function resolveHtmlPath(htmlFileName) {
  if (isDev) {
    // NOTE: 如果开发环境中你有其他程序占用了 3000 端口, 请更改远程链接的端口
    const port = process.env.PORT || 3000;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../web/', htmlFileName)}`;
}
