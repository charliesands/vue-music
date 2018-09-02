<template>
  <div>

    <div class="accordion row" id="accordionExample"></div>
    <div class="card col-sm-6 offset-sm-3 bg-dark">
      <div class="card-header" id="heading${i}">
        <h5 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#h${i}" aria-expanded="true" aria-controls="h${i}">
            ${songs.artistName} - ${songs.title}
          </button>
          <span class="badge badge-light float-right">$${songs.price}</span>
        </h5>
      </div>

      <div id="h${i}" class="collapse show" aria-labelledby="heading${i}" data-parent="#accordionExample">
        <div class="card-body text-center">
          <div class="mb-1">
            ${songs.collection}
          </div>
          <div class="mb-2">
            <img src="${song.albumArt}" />
          </div>
          <audio controls>
            <source src="${song.preview}" type="audio/ogg">
            <source src="${song.preview}" type="audio/mpeg"> Your browser does not support the audio element.
          </audio>
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