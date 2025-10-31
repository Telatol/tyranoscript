const { app, BrowserWindow } = require("electron");

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 1920,
        height: 1080,
        // 设置启动全屏
        // fullscreen: true,  
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // 加载index.html文件
    win.loadFile("index.html");
    // 打开开发者工具（根据需要取消注释）
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
