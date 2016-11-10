const {ipcRenderer} = require('electron');

function newWindow() {
   ipcRenderer.send('newwindow');
}