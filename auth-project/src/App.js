import React from "react";
import Hello from "./helloPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
