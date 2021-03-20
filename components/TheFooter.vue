<template>
  <footer>
    <b-container>
      <div>
        <h6>Impressum</h6>
        <p>Simon Neutert<br />Südring 311<br />55128 Mainz</p>
      </div>
      <div>
        Die Daten stammen von der Spotify API und sollen Fans der Reihe helfen
        leichter eine Folge finden zu können.
      </div>
      <p>
        <a href="https://github.com/simonneutert/bibi-blocksberg-on-spotify"
          >Code auf Github!</a
        >
      </p>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style>
footer {
  text-align: center;
  color: slategrey;
  background-color: whitesmoke;
}
</style>
