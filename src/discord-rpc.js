const DiscordRPC = require('discord-rpc')
const clientId = '1067452350496768080'

const client = new DiscordRPC.Client({ transport: 'ipc' })

client.on('ready', () => {
  client.setActivity({
    details: 'Loading ...',
    state: 'By kragleh#4943',
    startTimestamp: Date.now(),
    largeImageKey: 'large',
    instance: true,
  })
})

client.login({ clientId })

var timeout = Date.now()
var timeouts = []

function setActivity(activity) {
  client.setActivity(activity)
  /**let date = Date.now()

  if (timeout < date) {
    client.setActivity(activity)
    timeout = date + 15000
    timeouts.indexOf()
    return
  }
  
  var i = setTimeout(() => {
    setActivity(activity)
  }, 5000)

  timeouts.push(i)**/
}

module.exports = setActivity