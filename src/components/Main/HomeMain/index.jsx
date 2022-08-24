import React, { useEffect, useState } from "react";

import Artists from "../Artists";
import Search from "../Search";
import Title from "../Title";
import data from "../../../pages/HomeComponents/data";

function HomeMain() {
  const [showData, setShowData] = useState([]);
  const [enteredUserStr, setEnteredUserStr] = useState("");

  useEffect(() => {
    async function searchSinger() {
      const result = await data;
      setShowData(result);
    }
    searchSinger();
  }, [enteredUserStr]);

  function handleUserSearch(userInput) {
    setEnteredUserStr(userInput);
  }
  return (
    <>
      <main>
        <Search handleUserSubmittedSearch={handleUserSearch} />
        <Title />
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
    </>
  );
}

export default HomeMain;
