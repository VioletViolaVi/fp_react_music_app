import React, { useEffect, useState } from "react";

import { Artists, Footer, NavBar, Search } from "./components";
import mariahImg from "./assets/mariah.jfif";
import rihannaImg from "./assets/rihanna.png";
import toniImg from "./assets/toni.jpg";

const allSingersInfo = [
  {
    id: 1,
    singerName: "Mariah Carey",
    musicType: "R&B",
    para: "Mariah Carey is an American singer, songwriter, actress, and record producer. Referred to as the 'Songbird Supreme' and the 'Queen of Christmas', she is known for her five-octave vocal range, melismatic singing style, and signature use of the whistle register.",
    songName: "Against All Odds (Take a Look at Me Now)",
    releaseDate: "29 May 2000",
    coverArt: mariahImg,
    imgAlt: "Mariah Carey cover art"
  },
  {
    id: 2,
    singerName: "Rihanna",
    musicType: "R&B",
    para: "Robyn Rihanna Fenty born February 20, 1988) is a Barbadian singer, actress, and businesswoman. Born in Saint Michael and raised in Bridgetown, Barbados, Rihanna was discovered by American record producer Evan Rogers who invited her to the United States to record demo tapes.",
    songName: "Diamonds (Rihanna song)",
    releaseDate: "September 26, 2012",
    coverArt: rihannaImg,
    imgAlt: "Rihanna cover art"
  },
  {
    id: 3,
    singerName: "Toni Braxton",
    musicType: "R&B",
    para: "Toni Michele Braxton is an American R&B singer. She has sold over 70 million records worldwide and is one of the best-selling female artists in history. Braxton has won seven Grammy Awards, nine Billboard Music Awards, seven American Music Awards, and numerous other accolades.",
    songName: "Breathe Again",
    releaseDate: "August 6, 1993",
    coverArt: toniImg,
    imgAlt: "Toni Braxton cover art"
  }
];

export default function App() {
  const [showData, setShowData] = useState([]);
  const [enteredUserStr, setEnteredUserStr] = useState("");

  useEffect(() => {
    async function searchSinger() {
      const result = await allSingersInfo;
      console.log("result ==>", result);
      setShowData(result);
    }
    searchSinger();
  }, [enteredUserStr]);

  function handleUserSearch(userInput) {
    console.log("userInput ==>", userInput);
    setEnteredUserStr(userInput);
  }

  return (
    <>
      <NavBar />
      <main>
        <Search handleUserSubmittedSearch={handleUserSearch} />
        <h1 className="main_title">Singers</h1>
        {showData.map((singleObj) => {
          return (
            <Artists
              key={singleObj.id}
              singerName={singleObj.singerName}
              musicType={singleObj.musicType}
              para={singleObj.para}
              releaseDate={singleObj.releaseDate}
              songName={singleObj.songName}
              coverArt={singleObj.coverArt}
              imgAlt={singleObj.imgAlt}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
