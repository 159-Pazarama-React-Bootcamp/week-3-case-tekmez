import React from "react";
import Hello from "./helloPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from "./authPage";
import Store from './storePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>}/>
        <Route path='*' element={<Auth/>}/>
        <Route path='login/store' element={<Store/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
