<template>
  <div class="container-fluid">
    <div class="row">
      <div id="text-color" class="card col-sm-4 offset-sm-8 bg-dark" v-for="data in song">
        <div class="card-header">
          <h5 class="mb-0">
            <!-- <button class="btn btn-link" type="button">
              {{data.artistName}} - {{data.trackCensoredName}}
            </button> -->
            <span class="badge badge-light float-right">${{data.trackPrice}}</span>
            <div>
              {{data.artistName}} - {{data.trackCensoredName}}
            </div>
          </h5>
        </div>

        <!-- <div id="h${i}" class="collapse show" aria-labelledby="heading${i}" data-parent="#accordionExample"> -->
        <div class="card-body text-center">
          <div class="mb-1" id="album">
            {{data.collectionName}}
          </div>
          <div class="mb-2">
            <img :src="data.artworkUrl100" id="img" />
          </div>
          <audio controls>
            <source :src="data.previewUrl" type="audio/ogg">
            <source :src="data.previewUrl" type="audio/mpeg"> Your browser does not support the audio element.
          </audio>
          <span>
            <i class="fas fa-plus float-left fa-3x"></i>
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
      song() {
        return this.$store.state.songs
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