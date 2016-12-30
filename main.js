'use strict';
const electron = require('electron');
const path = require('path');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    transparent: true
  });
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
