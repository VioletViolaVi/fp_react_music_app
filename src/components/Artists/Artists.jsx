import React from "react";
import Likes from "../Likes/Likes";
import mariahImg from "../../assets/mariah.jfif";
import rihannaImg from "../../assets/rihanna.png";

const allSingersInfo = [
  {
    id: 1,
    singerName: "Mariah Carey",
    musicType: "R&B",
    intro:
      "Mariah Carey is an American singer, songwriter, actress, and record producer. Referred to as the 'Songbird Supreme' and the 'Queen of Christmas', she is known for her five-octave vocal range, melismatic singing style, and signature use of the whistle register.",
    songName: "Against All Odds (Take a Look at Me Now)",
    releaseDate: "29 May 2000",
    coverArt: mariahImg,
    imgAlt: "Mariah Carey cover art"
  },
  {
    id: 2,
    singerName: "Rihanna",
    musicType: "R&B",
    intro:
      "Robyn Rihanna Fenty born February 20, 1988) is a Barbadian singer, actress, and businesswoman. Born in Saint Michael and raised in Bridgetown, Barbados, Rihanna was discovered by American record producer Evan Rogers who invited her to the United States to record demo tapes.",
    songName: "Diamonds (Rihanna song)",
    releaseDate: "September 26, 2012",
    coverArt: rihannaImg,
    imgAlt: "Rihanna cover art"
  }
];

export default class Artists extends React.Component {
  render() {
    return (
      <>
        {allSingersInfo.map((singleObj) => {
          {
            console.log(singleObj);
          }
          return (
            <>
            <section key={singleObj.id} className="artist_sec_bg">
              <h2>{singleObj.singerName}</h2>
              <ul className="ul_bg">
                <li>{singleObj.musicType}</li>
                <li>{singleObj.intro}</li>
                <li>{singleObj.releaseDate}</li>
                <li>{singleObj.songName}</li>
                <li>
                  <img
                    className="music_posters"
                    src={singleObj.coverArt}
                    alt={singleObj.imgAlt}
                  />
                </li>
                <li>
                  <Likes />
                </li>
              </ul>
            </section>
            </>
          );
        })}
      </>
    );
  }
}
