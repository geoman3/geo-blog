import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./components/home";
import Navbar from "./components/navbar";
import Archive from './components/archive';
import About from './components/about';
import Footer from './components/footer';
import Article from './components/article';

function setDOMStyle() {
  document.body.style.backgroundColor = "rgb(60,60,60)";
  document.body.style.color = "white";
  document.body.style.padding = "0";
  document.body.style.margin = "0";
  document.body.style.border = "0";
};

function Main() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/about' element={<About />} />
          <Route path='/article/:title' element={<Article />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

setDOMStyle()
ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
