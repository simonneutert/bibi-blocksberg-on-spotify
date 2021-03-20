<template>
  <div>
    <div id="search-form">
      <b-input
        v-model="searchInput"
        type="text"
        placeholder="Suche nach Namen einer Episode"
        @keyup="searchEpisode()"
      />
    </div>

    <div id="episodes">
      <div v-if="searchableItems.length">
        <div v-for="album in searchableItemsCopy" :key="album.uri">
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
                <p>
                  <a :href="album.spotifyUri">Jetzt auf Spotify abspielen</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="m-4 p-4">
        <h4>Keine Treffer</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchableItems: { type: Array, required: true }
  },
  data() {
    return {
      searchInput: '',
      searchableItemsCopy: []
    }
  },
  mounted() {
    this.searchableItemsCopy = this.searchableItems
  },
  methods: {
    searchEpisode() {
      if (this.searchInput.length) {
        this.searchableItemsCopy = this.searchableItems.slice()
        const result = this.searchableItemsCopy.filter(
          function(album) {
            return (
              album.name
                .toLowerCase()
                .includes(this.searchInput.toLowerCase()) ||
              String(album.episode).includes(this.searchInput)
            )
          }.bind(this)
        )

        this.searchableItemsCopy = result
      } else {
        this.restorePlaylist()
      }
    },
    restorePlaylist() {
      this.searchableItemsCopy = this.searchableItems.slice()
    }
  }
}
</script>
