const electron = require('electron');
const { app, BrowserWindow, Menu } = electron; 


const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
      width: 900, 
      height: 680, 
      title: 'Car Service Tracker',
      icon: path.join(__dirname, '../assets/cartracker.ico')
    }
  );
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  //** openDevTools() will force the chrome dev tools open */
  //mainWindow.openDevTools()

  //Only show windows once everything is ready to show, works when "show" property on BrowserWindow set to false
  mainWindow.once('ready-to-show', () => { mainWindow.show() })
  
   const mainMenu = Menu.buildFromTemplate(menuTemplate);
   if(!isDev) {
     Menu.setApplicationMenu(mainMenu);
    } else {
    //--- Work
    //let name = BrowserWindow.addDevToolsExtension(`C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.2.3_0`);
    // let reactDevTools = BrowserWindow.addDevToolsExtension(`C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.2.3_0`);
    // let reduxDevTools = BrowserWindow.addDevToolsExtension(`C:/Users/mark.mccoid/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.2_0`);
    //--- Home
    let reactDevTools = BrowserWindow.addDevToolsExtension(`C:/Users/Mark/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.2.3_0`);
    let reduxDevTools = BrowserWindow.addDevToolsExtension(`C:/Users/Mark/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.2_0`);
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// --Create Menu Template
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Command+Q';
          } else {
            return 'Ctrl+Q';
          }
        })(),
        click() {
          app.quit();
        }
      }
    ]
  }
];
if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}