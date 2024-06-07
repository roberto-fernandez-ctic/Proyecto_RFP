import React, { Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/main";
import Rates from "./pages/rates";
import TitleUpdater from "./components/titleUpdater";
import About from "./pages/about";
import Contact from "./pages/contact";
import Bookings from "./pages/bookings";
import Login from "./pages/userLog";
import User from "./pages/user";
import Register from "./pages/register";

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
                <Bookings />
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

<Route
            exact
            path="/login"
            title="Login"
            element={
              <>
                <TitleUpdater title="Login" />
                <Login/>
              </>
            }
          />

<Route
            exact
            path="/user"
            title="User"
            element={
              <>
                <TitleUpdater title="User" />
                <User/>
              </>
            }
          />


<Route
            exact
            path="/register"
            title="Registro"
            element={
              <>
                <TitleUpdater title="Registro" />
                <Register/>
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
