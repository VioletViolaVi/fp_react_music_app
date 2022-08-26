import React from "react";

const LyricsCard = (props) => {
  return (
    <>
      <section>
        <h3>Lyrics</h3>
        <p>{props.lyrics}</p>

        <h3>Artist</h3>
        <p>{props.artist}</p>
      </section>
    </>
  );
};

export default LyricsCard;
