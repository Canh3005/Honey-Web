import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Page1 from "./pages/Page1.jsx";
import MA from "./pages/MA.jsx";
import TH from "./pages/TH.jsx";
import AT from "./pages/AT.jsx";
import Summary from "./pages/Summary.jsx";


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/ma" element={<MA />} />
        <Route path="/th" element={<TH />} />
        <Route path="/at" element={<AT />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
};

export default App;
