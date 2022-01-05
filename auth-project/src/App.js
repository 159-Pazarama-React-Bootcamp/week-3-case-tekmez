import React from "react";
import Hello from "./helloPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from "./authPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>}/>
        <Route path='*' element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
