import React, { useState, useEffect } from "react";

export default function Lyrics() {
  const [inputVal, setInputVal] = useState("");
  const [something, setSomething] = useState("");
  const [emptyObj, setEmptyObj] = useState(
    { id: 1, first: "1" },
    { id: 2, second: "2" }
  );

  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${inputVal}/title`)
      .then((res) => res.json())
      .then((data) => {
        setSomething(data.emptyObj);
      })
      .catch((err) => console.log(err));
  }, [inputVal]);

  function handleInput(e) {
    setInputVal(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputVal);
    setInputVal(inputVal);
  }

  return (
    <>
      {emptyObj.map((singleObj) => {
        return (
          <p key={singleObj.id}>
            {singleObj.first} :: {singleObj.second}
          </p>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} name="userInput" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
