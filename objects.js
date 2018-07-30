var playlist = {godofwar: "Kronos", Pathofexil: 'blank'}

function updatePlayList (object, key, value) {
  object[key] = value
  return object
}

updatePlayList(playlist, 'GOT', 'Dragon')

function removeFromPlaylist(object, key) {
  
}