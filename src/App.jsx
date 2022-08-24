import React from "react";
import { Routes, Route } from "react-router-dom";

import { AboutUsComponents, HomeComponents, LyricsComponents } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponents />}></Route>

        <Route path="lyrics" element={<LyricsComponents />}></Route>

        <Route path="about" element={<AboutUsComponents />}></Route>

        <Route path="*" element={<h1>Page Not Found 404!😭</h1>}></Route>
      </Routes>
    </>
  );
}
