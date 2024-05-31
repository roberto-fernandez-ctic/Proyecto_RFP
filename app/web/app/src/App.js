import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import devConfig from "./config.dev.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch from "./Fetch";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import Rates from "./pages/rates";
import TitleUpdater from "./components/titleUpdater";
import About from "./pages/about";
import Contact from "./pages/contact";
import { Calendar } from "./components/calendar";

function App() {
  // loading component for suspense fallback
  const Loader = () => (
    <div className="App">
      <img
        src="/images/logo_fondo_crop.png"
        alt="logo manager"
        style={{ width: "6rem", margin: "1rem", borderRadius: "5rem" }}
      />
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
              <>
                <TitleUpdater title="Home" />
                <Main />
              </>
            }
          />

          <Route
            exact
            path="/rates"
            title="Tarifas"
            element={
              <>
                <TitleUpdater title="Tarifas y Horarios" />
                <Rates />
              </>
            }
          />

          <Route
            exact
            path="/about"
            title="El Club"
            element={
              <>
                <TitleUpdater title="Sobre Nosotros" />
                <About />
              </>
            }
          />

          <Route
            exact
            path="/bookings"
            title="Reservas"
            element={
              <>
                <TitleUpdater title="Reservas" />
                <Calendar />
              </>
            }
          />

          <Route
            exact
            path="/contact"
            title="Contacto"
            element={
              <>
                <TitleUpdater title="Contacto" />
                <Contact />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

function PageComposer(props) {
  return <div>{props.page()}</div>;
}
