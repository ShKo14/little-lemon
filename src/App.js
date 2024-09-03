import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import {Fragment} from "react";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
