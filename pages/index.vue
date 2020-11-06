<template>
  <b-container>
    <ScrollToBottom />
    <TheSearchForm :searchableItems="playlist.items" />
  </b-container>
</template>

<script>
import playlist from '@@/static/bibi_formatted.json'

export default {
  data() {
    return {
      playlist,
      playlistInit: playlist
    }
  }
}
</script>

<style>
#episodes {
  min-height: 70vh;
}
</style>
