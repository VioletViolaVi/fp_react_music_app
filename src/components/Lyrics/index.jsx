import React, { useEffect, useState } from "react";

function Lyrics() {
  const [showLyrics, setShowLyrics] = useState([]);
  const [enterSinger, setEnteredSinger] = useState("");
  const [enterSong, setEnteredSong] = useState("");

  useEffect(() => {
    fetch(
      `https://private-451fd-lyricsovh.apiary-mock.com/v1/${enterSinger}/${enterSong}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [enterSinger, enterSong]);

  return (
    <>
      <h1>Lyrics go here...</h1>
    </>
  );
}

export default Lyrics;
