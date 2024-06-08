import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Main(props) {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/bookings');
  };

  return (
    <div className="mainContent">
      {/* HEADER-NAVBAR */}
      <Header />

      {/* MAIN PAGE CONTENT */}
      <header className="main">
        <div className="container content responsive-text">
          <h1 className="h1 ml-2 mb-3 text-uppercase text-green">
            Cabo Busto Pádel Club
          </h1>
          <h3 className="h3 ml-2 mb-3">
            Donde la Luz y el Deporte brillan con cada golpe
          </h3>
          <p className="lead responsive-text">
            En <strong className="text-green">Cabo Busto Pádel Club</strong>, nos apasiona el deporte y
            la comunidad. Aquí, cada golpe de raqueta es un paso hacia la
            excelencia y la diversión. Nos enorgullece ofrecer un espacio donde buscamos fomentar:
          </p>
          <ul className="list-unstyled">
            <li>
              <strong className="text-green">La Pasión por el Pádel:</strong>{" "}
              Fomentamos el amor por el pádel, desde principiantes hasta
              expertos.
            </li>
            <li>
              <strong className="text-green">La Comunidad:</strong> Creamos un
              ambiente acogedor y de respeto donde cada miembro se siente como
              en casa.
            </li>
            <li>
              <strong className="text-green">El Crecimiento Personal:</strong>{" "}
              Apoyamos a nuestros clientes a superar sus límites y alcanzar
              nuevas metas.
            </li>
            <li>
              <strong className="text-green">El Espíritu Deportivo:</strong>{" "}
              Promovemos el juego limpio y el respeto mutuo dentro y fuera de la
              pista.
            </li>
          </ul>
          <p className="lead responsive-text">
            Únete a nosotros y forma parte de una comunidad que brilla tanto
            como el faro que nos guía. ¡Vamos a brillar juntos en cada partido!
          </p>

          <div className="container mt-5">
            <button onClick={handleButtonClick} className="btn custom-button">¡Reserva ya!</button>
          </div>
        </div>
      </header>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
