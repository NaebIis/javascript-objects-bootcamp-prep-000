var playlist = ['god of war', 'Kronos']

function updatePlayList (object, key, value) {
  object[key] = value
  return object
}

updatePlayList(playlist, 'GOT', 'Dragon')