import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Page1 from "./pages/Page1.jsx";


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </>
  );
};

export default App;
