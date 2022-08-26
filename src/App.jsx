import React from "react";
import { Routes, Route } from "react-router-dom";

import { AboutUsPage, HomePage, LyricsPage } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="lyrics" element={<LyricsPage />}></Route>

        <Route path="about" element={<AboutUsPage />}></Route>

        <Route path="*" element={<h1>Page Not Found 404!😭</h1>}></Route>
      </Routes>
    </>
  );
}
