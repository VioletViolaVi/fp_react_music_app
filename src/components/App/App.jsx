import React from "react";
import Artists from "../Artists/Artists";
import Footer from "../Footer/Footer";
import Lyrics from "../Lyrics/Lyrics";
import NavBar from "../NavBar/NavBar";

export default function App() {
  const titles = [{ id: 1, name: "Singers" }];

  return (
    <>
      <NavBar />
      <main>
        <h1 className="main_title">{titles[0].name}</h1>
        <Artists />
        <Lyrics />
      </main>
      <Footer />
    </>
  );
}
