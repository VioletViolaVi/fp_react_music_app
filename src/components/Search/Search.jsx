import React, { useState, useEffect } from "react";

function Search({ handleUserSubmittedSearch }) {
  const [currentUserInput, setCurrentUserInput] = useState("");

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    setCurrentUserInput(() => {
      return currentUserInput;
    });
  };

  const handleInput = (event) => {
    const whatUserEntered = event.target.value;
    handleUserSubmittedSearch(whatUserEntered);
  };

  return (
    <>
      <form className="form_bg" onSubmit={handleSubmit}>
        <input type="text" name="userInput" value={currentUserInput}/>
        <input type="submit" value="Send" onChange={handleInput} />
      </form>
    </>
  );
}
export default Search;
