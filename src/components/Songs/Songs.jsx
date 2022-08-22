import React from "react";
import mariahImg from "../../assets/mariah.jfif";
import rihannaImg from "../../assets/rihanna.png";
import "./Songs.css";

const allSongsInfo = [
  {
    id: 1,
    name: "Against All Odds (Take a Look at Me Now)",
    releaseDate: "29 May 2000",
    coverArt: mariahImg,
    imgAlt: "Mariah Carey cover art"
  },
  {
    id: 2,
    name: "Diamonds (Rihanna song)",
    releaseDate: "September 26, 2012",
    coverArt: rihannaImg,
    imgAlt: "Rihanna cover art"
  }
];

export default class Songs extends React.Component {
  render() {
    return (
      <>
        <h2>Song List</h2>
        <ul className="ul_bg">
          {allSongsInfo.map((singleObj) => {
            return (
              <>
                <li>{singleObj.name}</li>
                <li>{singleObj.releaseDate}</li>
                <li>
                  <img
                    className="music_posters"
                    src={singleObj.coverArt}
                    alt={singleObj.imgAlt}
                  />
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}
