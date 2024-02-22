import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

//This is for routing
import { Link, Route, Routes } from 'react-router-dom';

//
//import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import FilmList from "./components/film-list.component";

//function App() {
class App extends React.Component {
   render() {

      return (
          <div>
             <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/films" className="navbar-brand">
                   ADM
                </a>
                <div className="navbar-nav mr-auto">
                   <li className="nav-item">
                      <Link to={"/films"} className="nav-link">
                         All Films
                      </Link>
                   </li>
                   <li className="nav-item">
                      <Link to={"/unwatched"} className="nav-link">
                         Unwatched
                      </Link>
                   </li>
                </div>
             </nav>

           <div className="container mt-3">
             <Routes>
                <Route path="/" element={<FilmList/>} />
                <Route path="/films" element={<FilmList/>} />
                <Route path="/unwatched" element={<FilmList/>} />
              </Routes>
           </div>
{/*
          <div className="App">
               <h1>Hello World</h1>
             <h3>All Films</h3>
             <h3>Unwatched Films</h3>
             <h3>Wishlist Films</h3>
             <h3>Films On TV</h3>
             <h3>Available On Streaming</h3>
             </div>
*/}
          </div> 
          )
   }
}
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//ReactDOM.render(<App />, document.getElementById('root'))

export default App;
