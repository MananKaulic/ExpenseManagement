import React from "react";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
