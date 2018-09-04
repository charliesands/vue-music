<template>
  <div class="">
    <div class="">
      <div id="text-color" class="card bg-dark" v-for="song in playlist">
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
            <button @click="removeSong(song)" class="fas fa-times float-left fa-3x"></button>
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
    name: 'playlist',
    mounted() {
      this.$store.dispatch('getSongs')
    },
    computed: {
      playlist() {
        return this.$store.state.userSongs
      }
    },
    methods: {
      removeSong(song) {
        this.$store.dispatch('removeSong', song)
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