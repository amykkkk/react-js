import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route
          path={process.env.PUBLIC_URL + "/movie/:id"}
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;