import React, { useState, useEffect } from "react";

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
      <form className="form_bg" onSubmit={handleSubmit}>
        <label htmlFor="singerSearch"></label>
        <input
          type="text"
          id="singerSearch"
          defaultValue={currentUserInput}
          onChange={handleInput}
        />
        <button>Send</button>
      </form>
    </>
  );
}
export default Search;
