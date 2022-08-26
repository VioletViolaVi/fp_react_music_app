import React, { useEffect, useState } from "react";
import LyricsCard from "./LyricsCard";

const API_URL = "https://api.lyrics.ovh/v1/";

const Lyrics = () => {
  const [showLyrics, setShowLyrics] = useState([]);
  const [enterSinger, setEnteredSinger] = useState("");
  const [enterSong, setEnteredSong] = useState("");

  // its own function
  const searchLyricsAPI = async (singer, song) => {
    const res = await fetch(`${API_URL}/${singer}/${song}`);
    const data = await res.json();

    setShowLyrics(data);
    console.log("data ==> ", data);
  };

  //  fetching data
  useEffect(() => {
    searchLyricsAPI("rihanna", "disturbia");
  }, []);

  // user interface
  return (
    <>
      <form>
        <label htmlFor="singer"></label>
        <input
          type="text"
          name="singer"
          id="singer"
          placeholder="Name of singer"
          value={enterSinger}
          onChange={(e) => {
            return setEnteredSinger(e.target.value);
          }}
        />

        <br />

        <label htmlFor="songTitle"></label>
        <input
          type="text"
          name="songTitle"
          id="songTitle"
          placeholder="Name of song"
          value={enterSong}
          onChange={(e) => {
            return setEnteredSong(e.target.value);
          }}
        />

        <br />

        <button
          onClick={() => {
            return searchLyricsAPI(enterSinger, enterSong);
          }}
        >
          Get Lyrics
        </button>
      </form>

      <section>
        {showLyrics.map((singleObj) => {
          return (
            <LyricsCard
              key={singleObj.id}
              lyrics={singleObj.lyrics}
              artist={singleObj.artist}
            />
          );
        })}
      </section>
    </>
  );
};

export default Lyrics;
