import React from "react";
import { Routes, Route } from "react-router-dom";

import { EveryMain, Footer, NavBar } from "../../components";

export default function ForAllComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<EveryMain />}></Route>
          <Route path="contact" element={<h2>Contacts go here</h2>}></Route>
          <Route index element={<Footer />}></Route>
        </Route>

        <Route path="*" element={<h1>Page Not Found 404!</h1>}></Route>
      </Routes>

      {/* <NavBar />
      <EveryMain />
      <Footer /> */}
    </>
  );
}
