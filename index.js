const electron = require("electron");

electron.app.on("ready", () => {
  // インスタンスを変数に格納しておきます。
  const browserWindow = new electron.BrowserWindow({ autoHideMenuBar: true });
  // デベロッパーツール自動起動
  // browserWindow.webContents.openDevTools();
  // loadFile()を使って、ウィンドウに.htmlファイルを読み込ませます。
  browserWindow.loadFile("./index.html");
});
