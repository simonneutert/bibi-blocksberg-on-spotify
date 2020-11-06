<template>
  <b-container id="hello-container">
    <h1 class="title">
      <span class="hexe">Bibi Blocksberg auf </span
      ><span class="spotify">Spotify</span> 🧹
    </h1>
  </b-container>
</template>

<script>
export default {}
</script>

<style>
#hello-container {
  min-height: 130px;
  text-align: center;
  background-color: hotpink;
}
.hexe {
  color: white;
  opacity: 0.95;
  transition: 0.3s;
}
.hexe:hover {
  opacity: 0.8;
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
