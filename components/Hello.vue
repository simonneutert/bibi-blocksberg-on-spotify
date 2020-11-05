<template>
  <b-container id="hello">
    <b-row class="mb-4">
      <h1 class="title">
        <span class="hexe">Bibi Blocksberg auf </span
        ><span class="spotify">Spotify</span>
      </h1>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style>
#hello {
  min-height: 100vh;
}
.hexe {
  color: white;
  opacity: 0.2;
  transition: 0.3s;
}
.hexe:hover {
  opacity: 1;
}
.spotify {
  color: white;
  padding: 0.5em;
  background-color: #1db954;
  display: inline-block;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 4em;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}
</style>
