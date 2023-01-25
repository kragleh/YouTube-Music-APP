const { app, BrowserWindow } = require('electron')
const path = require('path')
const setActivity = require('./discord-rpc')

if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreenable: true,
    resizable: true
  })

  mainWindow.setIcon(path.join(__dirname, '/assets/icon-rounded.png'))
  mainWindow.setMenu(null)
  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  mainWindow.webContents.on('page-title-updated', (e, title) => {

    if (title.includes(' - YouTube Music')) {

      var music = title.replace(' - YouTube Music', '')
      var link = mainWindow.webContents.getURL()

      setActivity({
        details: 'Listening to',
        state: music,
        startTimestamp: Date.now(),
        largeImageKey: 'large',
        buttons: [
          {
            label: 'Open Song',
            url: link
          }
        ],
        instance: true,
      })

      return
    }

    if (title === 'YouTube Music') {
      setActivity({
        details: 'Browsing The App',
        state: 'By kragleh#4943',
        startTimestamp: Date.now(),
        largeImageKey: 'large',
        smallImageKey: 'none',
        instance: true,
      })
    }
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
