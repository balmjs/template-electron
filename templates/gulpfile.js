const path = require("path");
const balm = require("balm");
const packager = require("electron-packager");
const packagerConfig = require("./packager.config");

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
balm.config = {
  server: {
    localOnly: true
  },
  roots: {
    source: "app"
  },
  paths: {
    source: {
      css: "css",
      js: "js"
    }
  },
  styles: {
    extname: "scss"
  },
  scripts: {
    entry: {
      renderer: "./app/js/renderer/index.js",
      main: "./app/js/main.js"
    },
    alias: {
      "@": path.resolve(__dirname, "app/scripts")
    },
    target: "electron-renderer",
    webpack: {
      node: {
        __dirname: false
      }
    }
  }
  // More Config
};

balm.afterTask = () => {
  if (balm.config.env.isProd) {
    // asar.createPackage('./dist', 'app.asar', function () {
    //   console.log(`app.asar has been created.`);
    // });
    packager(packagerConfig, function done_callback(err, appPaths) {
      console.log("done.");
    });
  } else {
    require("child_process").exec("npm start");
  }
};

balm.go();
