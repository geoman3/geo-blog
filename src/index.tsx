import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./components/home";
import Navbar from "./components/navbar";
import Articles from './components/articles';
import About from './components/about';

function Main() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
