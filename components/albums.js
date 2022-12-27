function calculatedMaxWidth(props) {
  if (props.cardMaxWidth) {
    console.log(props.cardMaxWidth)
    return { maxWidth: `${props.cardMaxWidth}` }
  } else {
    return { maxWidth: 'auto' }
  }
}

export default function Albums(props) {
  if (props.albums && props.albums.items) {
    return (
      <>
        {props.albums.items.map((album) => (
          <div className="card mb-3" style={calculatedMaxWidth(props)} key="album.uri">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={album.images[1].url} className="img-fluid rounded-start" alt={album.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{album.name}</h5>
                  <p className="card-text">
                    <a href={album.spotifyUrl}>auf Spotify Website anzeigen</a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <a href={album.uri}>Jetzt auf Spotify abspielen</a>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </>
    )
  }
  else {
    return (
      <></>
    )
  }
}
