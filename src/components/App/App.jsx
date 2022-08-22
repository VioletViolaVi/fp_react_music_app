import React from "react";
import Artists from "../Artists/Artists";
import Songs from "../Songs/Songs";

export default function App({ id, name }) {
  const titles = [
    { id: 1, name: "Singers" },
    { id: 2, name: "Songs" }
  ];

  return (
    <>
      <h1>{titles[0].name}</h1>
      <Artists />
      <h1>{titles[1].name}</h1>
      <Songs />
    </>
  );
}
