import React, { useState, useEffect } from "react";

export default function Lyrics() {
  const [something, setSomething] = useState("");
  const [inputVal, setInputVal] = useState({ inputEntered: "" });

  useEffect(() => {
    fetch("https://api.lyrics.ovh/v1/artist/title")
      .then((res) => res.json())
      .then((data) => {
        setSomething(data.something);
      })
      .catch((err) => console.log(err));
  }, [something]);

  function handleInput(e) {
    setInputVal((prevInputVal) => {
      return {
        [e.target.name]: event.target.value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputVal);
    setInputVal(inputVal);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          name="userInput"
          value={inputVal.inputEntered}
        />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
