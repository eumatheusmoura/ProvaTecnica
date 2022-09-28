import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrar from "./pages/Cadastrar";
import Home from "./pages/Home";
import "./App.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
