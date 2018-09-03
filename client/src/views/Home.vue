<template>
  <div class="home">
    <form v-on:submit.prevent="startSearch">
      <input type="text" v-model="search.searchResults.artist" placeholder="Search Artist">
      <button type="button" @click="startSearch">Search</button>
    </form>
    <itunes></itunes>
  </div>
</template>
</template>

<script>
  import router from '../router.js'
  import Itunes from '../components/Itunes'

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
      Itunes

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