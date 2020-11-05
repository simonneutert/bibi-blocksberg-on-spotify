<template>
  <div class="container">
    <h1 class="title">
      Bibi Blocksberg auf Spotify
    </h1>

    <div id="search-form">
      <b-input
        type="text"
        v-model="searchInput"
        placeholder="Suche nach Namen einer Episode"
        @keyup="searchEpisode()"
      />
    </div>

    <div v-for="album in playlist.items" :key="album.uri">
      <div class="row py-4">
        <div class="col-sm-2">
          <b-img :src="album.images[1].url" fluid />
        </div>
        <div class="col-sm-10">
          <h4>{{ album.name }}</h4>
          <p>
            Episode {{ album.episode }}
            <a :href="album.href">(auf Spotify Website)</a>
          </p>
          <div class="play">
            <p><a :href="album.spotifyUri">Jetzt auf Spotify abspielen</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playlist from '@@/static/bibi_formatted.json'
export default {
  components: {},
  data() {
    return {
      playlist,
      playlistInit: playlist,
      searchInput: ''
    }
  },
  methods: {
    searchEpisode() {
      if (this.searchInput.length) {
        this.playlist = Object.assign({}, this.playlistInit)
        const result = this.playlist.items.filter(
          function(album) {
            return album.name
              .toLowerCase()
              .includes(this.searchInput.toLowerCase())
          }.bind(this)
        )

        if (result.length) {
          this.playlist.items = result
        } else {
          this.restorePlaylist()
        }
      } else {
        this.restorePlaylist()
      }
    },
    restorePlaylist() {
      this.playlist = Object.assign({}, this.playlistInit)
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
