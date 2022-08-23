import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${cohort}/roster.json`
      );
      const json = await data.json();
      setStudents(json.students);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {students.map((s) => (
        <p> {s.name}</p>
      ))}
    </div>
  );
}

export default App;
