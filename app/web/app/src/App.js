import React, {Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import devConfig from "./config.dev.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fetch from './Fetch';
import Header from './components/header';
import Footer from './components/footer';

function App() {

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
<img src="/logo_fondo_crop.png" alt="logo manager" style={{width: "6rem", margin: "1rem", borderRadius: "5rem"}}/>
    <div>loading...</div>
  </div>
);

  return (
    <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Header/>
          }
        />
      </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App

function PageComposer(props) {
  return (
    <div>
      {props.page()}
    </div>
  );
}
