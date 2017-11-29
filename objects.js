playlist = {'RHCP' : 'Snow'}

function updatePlaylist(object, artist, song) {
  Object.assign(object, [artist] : [song])
  return object
}