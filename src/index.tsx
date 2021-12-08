import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./pages/home";
import Navbar from "./components/navbar";
import Archive from './pages/archive';
import About from './pages/about';
import Footer from './components/footer';
import Article from './pages/article';

import "./index.css"

function Main() {
  return (
    <div className="Main">
      <div className="Content">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/about' element={<About />} />
            <Route path='/article/:title' element={<Article />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
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
