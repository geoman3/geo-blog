import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./components/home";

export default function Main() {
    return (
      <div className="Main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }