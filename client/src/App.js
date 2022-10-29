import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/CardDetail/CardDetail";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/detail/:id' element={ <Detail/>} /> 
    
      </Routes>
  );
}

export default App;
