export default class Song {
  constructor(song) {
    this.trackPrice = song.trackPrice
    this.artistName = song.artistName
    this.trackCensoredName = song.trackCensoredName
    this.collectionName = song.collectionName
    this.artworkUrl100 = song.artworkUrl100
    this.previewUrl = song.previewUrl
    this.trackId = song.trackId
  }
}