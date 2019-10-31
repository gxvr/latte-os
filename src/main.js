const electron = require('electron');
const url = require('url');
const path = require('path');

const {
    app,
    BrowserWindow
} = electron;

let splashWindow;
let osWindow;

app.on('ready', function () {

//Splash Window
    splashWindow = new BrowserWindow({
        width:397,
        height:530,
        center: true,
        frame: false,
        maximizable: false,
        transparent: true,
        show: false
    });

    splashWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'splash.html'),
        protocol: 'file:',
        slashes: true
    }));

   splashWindow.setMenuBarVisibility(false);
   splashWindow.on('closed', function () {
        app.quit();
    });

//OS Window
    osWindow = new BrowserWindow({
        width: 1100,
        height: 700,
        minWidth: 1100,
        minHeight: 700,
        center: true,
        title: "Latte OS",
        // show: false
    });

    osWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'os.html'),
        protocol: 'file:',
        slashes: true
    }));

   osWindow.setMenuBarVisibility(false);
   osWindow.on('closed', function () {
        app.quit();
    });
    

});
