import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import Song from './models/Song.js'

Vue.use(Vuex)

let songApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

let server = Axios.create({
  baseURL: '//localhost:3000/api/songs',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    song: {},
    songs: [],
    userSong: {},
    userSongs: []
  },
  mutations: {
    setList(state, data) {
      state.songs = data
    },
    setUserList(state, data) {
      state.userSongs = data
    },
    setUserSong(state, data) {
      state.userSong = data
    }
  },
  actions: {
    listSongs({ commit, dispatch }, artist) {
      songApi.get('/' + artist)
        .then(songs => {
          console.log(songs.data.results)
          let searchResults = songs.data.results.map(s => new Song(s))
          commit('setList', searchResults)
          router.push({ name: 'home' })
        })
    },
    getSongs({ commit, dispatch }) {
      server.get('/')
        .then(songs => {
          console.log(songs)
          commit('setUserList', songs.data)
          router.push({ name: 'home' })
        })
    },
    addSong({ commit, dispatch }, song) {
      server.post('', song)
        .then(song => {
          console.log(song)
          dispatch('getSongs')
        })
    },
    removeSong({ commit, dispatch }, song) {
      server.delete('/' + song._id)
        .then(res => {
          dispatch('getSongs')
        })
    }

  }

})
