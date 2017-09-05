const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win

// Set the path where recordings will be saved

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'html/mysqlpost.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)