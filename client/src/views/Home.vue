<template>
  <div class="home">
    <form v-on:submit.prevent="startSearch">
      <input type="text" v-model="search.searchResults.artist" placeholder="Search Artist">
      <button type="button" @click="startSearch">Search</button>
    </form>
    <div class="container-fluid">
      <div class="row">
        <div class="col">

          <itunes class="col-6"></itunes>

          <playlist class="col-6"></playlist>
        </div>

      </div>
    </div>
  </div>
</template>
</template>

<script>
  import router from '../router.js'
  import Itunes from '../components/Itunes'
  import Playlist from '../components/Playlist'

  export default {
    name: 'home',
    data() {
      return {
        search: {
          searchResults: {
            artist: ""
          }
        }
      }
    },
    components: {
      Itunes,
      Playlist

    },
    computed: {
      song() {
        return this.$store.state.songs
      }
    },
    methods: {
      startSearch() {
        this.$store.dispatch('listSongs', this.search.searchResults.artist)

      }

    }
  }
</script>