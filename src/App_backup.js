import React from "react";
import { company, content } from "./data/data.js";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./pages/Header.js";
import Details from "./pages/Details.js";
const App = () => {
  return (
    <div>
      <Header data={company} />
      {content.map((it) => {
        return (
          <div key={it.id}>
            <Link to={`/list/${it.id}`}>{it.id}</Link>
          </div>
        );
      })}
      <Routes>
        <Route path="/list/:num" element={<Details list={content} />} />
      </Routes>
    </div>
  );
};

export default App;
