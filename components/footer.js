export default function Footer() {
  return (
    <>
      <div className="container my-2">
        <div>
          <h6>Impressum</h6>
          <p>Simon Neutert<br />Postfach 1120<br />55258 Ingelheim</p>
        </div>
        <div>
          Die Daten stammen von der Spotify API und sollen Fans der Reihe helfen,
          leichter eine bestimmte Folge finden zu können.
        </div>
        <div>
          <a
            className="btn btn-secondary"
            href="https://github.com/simonneutert/bibi-blocksberg-on-spotify">
            Code auf Github!
          </a>
        </div>
      </div>
    </>
  )
}
