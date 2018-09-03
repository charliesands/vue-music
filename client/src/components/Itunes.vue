<template>
  <div class="container-fluid">
    <div class="row">
      <div id="text-color" class="card col-sm-4 offset-sm-8 bg-dark" v-for="song in songs">
        <div class="card-header">
          <h5 class="mb-0">
            <!-- <button class="btn btn-link" type="button">
              {{data.artistName}} - {{data.trackCensoredName}}
            </button> -->
            <span class="badge badge-light float-right">${{song.trackPrice}}</span>
            <div>
              {{song.artistName}} - {{song.trackCensoredName}}
            </div>
          </h5>
        </div>

        <!-- <div id="h${i}" class="collapse show" aria-labelledby="heading${i}" song-parent="#accordionExample"> -->
        <div class="card-body text-center">
          <div class="mb-1" id="album">
            {{song.collectionName}}
          </div>
          <div class="mb-2">
            <img :src="song.artworkUrl100" id="img" />
          </div>
          <audio controls>
            <source :src="song.previewUrl" type="audio/ogg">
            <source :src="song.previewUrl" type="audio/mpeg"> Your browser does not support the audio element.
          </audio>
          <span>
            <button @click="addSong" class="fas fa-plus float-left fa-3x"></button>
          </span>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>


</template>

<script>
  export default {
    name: 'itunes',
    // data() {
    //   return {
    //     // songObject: {
    //     //   trackPrice: "",
    //     //   artistName: "",
    //     //   trackCensoredName: "",
    //     //   collectionName: "",
    //     //   artworkUrl100: "",
    //     //   previewUrl: "",
    //     //   trackId: ""
    //     // }
    //   }

    // },
    computed: {
      songs() {
        return this.$store.state.songs
      }
    },
    methods: {
      // setSongObject(trackPrice,
      //   artistName,
      //   trackCensoredName,
      //   collectionName,
      //   artworkUrl100,
      //   previewUrl,
      //   trackId) {
      //   this.songObject.trackPrice = trackPrice
      //   this.songObject.artistName = artistName
      //   this.songObject.trackCensoredName = trackCensoredName
      //   this.songObject.collectionName = collectionName
      //   this.songObject.artworkUrl100 = artworkUrl100
      //   this.songObject.previewUrl = previewUrl
      //   this.songObject.trackId = trackId
      //   this.$store.dispatch('addSong', this.songObject)
      // }
      addSong(song) {
        this.$store.dispatch('addSong', song)
      }
    }
  }


</script>

<style>
  #img {
    width: auto;
    height: 200px;
  }

  #text-color {
    color: antiquewhite;

  }
</style>