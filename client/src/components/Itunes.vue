<template>
  <div class="">
    <div class="">
      <div id="text-color" class="card bg-dark" v-for="song in songs" :key="song.trackId">
        <div class="card-header">
          <h5 class="mb-0">
            <span class="badge badge-light float-right">${{song.trackPrice}}</span>
            <div>
              {{song.artistName}} - {{song.trackCensoredName}}
            </div>
          </h5>
        </div>
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
            <button @click="addSong(song)" class="fas fa-plus float-left fa-3x"></button>
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
    computed: {
      songs() {
        return this.$store.state.songs
      }
    },
    methods: {
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