import React, { useEffect, useState } from "react";

function Lyrics() {
  // const [showLyrics, setShowLyrics] = useState([]);
  // const [enterSinger, setEnteredSinger] = useState("");
  // const [enterSong, setEnteredSong] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `https://private-451fd-lyricsovh.apiary-mock.com/v1/${enterSinger}/${enterSong}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [enterSinger, enterSong]);

  return (
    <>
      <form>
        <label htmlFor="artist"></label>
        <input
          type="text"
          name="artist"
          id="artist"
          placeholder="Name of artist"
        />

        <br />

        <label htmlFor="songTitle"></label>
        <input
          type="text"
          name="songTitle"
          id="songTitle"
          placeholder="Name of song"
        />

        <br />

        <button>Get Lyrics</button>
      </form>
    </>
  );
}

export default Lyrics;
