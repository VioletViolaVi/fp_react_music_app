import React, { useState } from "react";

function Search({ handleUserSubmittedSearch }) {
  const [currentUserInput, setCurrentUserInput] = useState("");

  const handleInput = (event) => {
    const whatUserEntered = event.target.value;
    setCurrentUserInput(whatUserEntered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserSubmittedSearch(currentUserInput);
  };

  return (
    <>
      {currentUserInput ? (
        <p id="togglePara">
          You entered '<span id="userInput">{currentUserInput}</span>'
        </p>
      ) : (
        ""
      )}
      <form className="form_bg" onSubmit={handleSubmit}>
        <label htmlFor="singerSearch"></label>
        <input
          placeholder="Search"
          type="text"
          id="singerSearch"
          defaultValue={currentUserInput}
          onChange={handleInput}
          required
        />
        <button>Send</button>
      </form>
    </>
  );
}
export default Search;
