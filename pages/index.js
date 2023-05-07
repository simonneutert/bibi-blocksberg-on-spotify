import Head from "next/head";
import Albums from "../components/albums";

import bibi from "../public/bibi_formatted.json";

import { useEffect, useState, useMemo } from "react";

export default function Home() {
  const shuffle = useMemo(() => {
    return {
      items: [bibi.items[Math.floor(Math.random() * bibi.items.length)]],
    };
  }, []);

  const [albums, setAlbums] = useState([]);
  useEffect(() => setAlbums(shuffle), [shuffle]);

  const [albumsFiltered, setAlbumsFiltered] = useState([]);
  useEffect(() => setAlbumsFiltered(bibi), []);

  const [searchFilter, setSearchFilter] = useState("");
  // useEffect(() => setSearchFilter(searchFilter), "")

  function watchInput(event) {
    const newInputValue = event.target.value;
    setSearchFilter(newInputValue);
    if (newInputValue.length >= 3) {
      const hits = bibi.items.filter((item) => {
        return item.name.toLowerCase().match(newInputValue.toLowerCase());
      });
      setAlbumsFiltered({ items: hits });
    } else {
      setAlbumsFiltered(bibi);
    }
  }

  return (
    <>
      <Head>
        <title>Bibi Blocksberg on Spotify</title>
        <meta
          name="description"
          content="Browse Bibi Blocksberg Hörspiele auf Spotify"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h2>
          Finde immer das passende Hörspiel von Bibi Blocksberg auf Spotify
        </h2>
        <input
          type="text"
          value={searchFilter}
          onChange={watchInput}
          placeholder="Suche ..."
        />
      </div>

      {[albums, albumsFiltered].map((coll, i) => {
        if (i == 0) {
          return (
            <div className="container" key={i}>
              <div className="d-flex justify-content-center">
                <div>
                  <div className="my-4">
                    <h4>Zufälliges Album</h4>
                    <Albums albums={coll} cardMaxWidth="100%" />
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="container" key={i}>
              <h2>Alle Hörspiele von Bibi Blocksberg auf Spotify</h2>
              <div className="my-4">
                <Albums albums={coll} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
