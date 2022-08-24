import React, { useEffect, useState } from "react";

import Artists from "../Artists";
import Search from "../Search";
import Title from "../Title";
import data from "../../../pages/ForAllComponents/data";

function EveryMain() {
  const [showData, setShowData] = useState([]);
  const [enteredUserStr, setEnteredUserStr] = useState("");

  useEffect(() => {
    async function searchSinger() {
      const result = await data;
      // console.log("result ==>", result);
      setShowData(result);
    }
    searchSinger();
  }, [enteredUserStr]);

  function handleUserSearch(userInput) {
    // console.log("userInput ==>", userInput);
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

export default EveryMain;
