import React from "react";
import Likes from "../Likes/Likes";

function Artists(props) {
  return (
    <>
      <section key={props.id} className="artist_sec_bg">
        <h2>{props.singerName}</h2>
        <ul className="ul_bg">
          <li>
            <span className="li_sub_title">Genre: </span>
            {props.musicType}
          </li>
          <li>
            <span className="li_sub_title">About: </span>
            {props.intro}
          </li>
          <li>
            <span className="li_sub_title">Released: </span>
            {props.releaseDate}
          </li>
          <li>
            <span className="li_sub_title">Song: </span>
            {props.songName}
          </li>
          <li>
            <img
              className="music_posters"
              src={props.coverArt}
              alt={props.imgAlt}
            />
          </li>
          <li>
            <Likes />
          </li>
        </ul>
      </section>
    </>
  );
}

export default Artists;
