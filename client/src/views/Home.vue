<template>
  <div class="home">
    <form v-on:submit.prevent="startSearch" class="float-left">
      <input type="text" v-model="search.searchResults.artist" placeholder="Search Artist">
      <button type="button" class="btn btn-dark" @click="startSearch">Search</button>
    </form>
    <div class="container-fluid">
      <div class="row">
        <playlist class="offset-4 col-4"></playlist>
        <itunes class="col-4"></itunes>
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

<style>
  body {
    background-image: url(https://pbs.twimg.com/media/CODNeh9WwAASotR.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: auto;
  }
</style>