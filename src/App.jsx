import React from "react";
import { Routes, Route } from "react-router-dom";

import { ForAllComponents } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ForAllComponents />}></Route>
        <Route path="*" element={<h1>Page Not Found 404!</h1>}></Route>
      </Routes>
    </>
  );
}
