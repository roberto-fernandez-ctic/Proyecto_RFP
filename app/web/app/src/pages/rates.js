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
      <div className="main content bg-translucent">
        <section>
          <article>
          <h1 className="h1 ml-2 mb-0 text-light">PISTAS DE PÁDEL Y CLASES</h1>
            <p>
              <h2 className="h2 ml-2 mb-0 text-green">
                CLASES DE PÁDEL (contacto previo con el centro)
              </h2>
              <ul className="responsive-text">
                <li>1 Jugador - 22€</li>
                <li>2 Jugadores - 11€</li>
                <li>3 Jugadores - 7,5€</li>
                <li>4 Jugadores - 6€</li>
              </ul>
            </p>
          </article>
          <article>
            <p className="responsive-text">
              <h2 className="h2 ml-2 mb-0 text-green">HORARIOS DE MAÑANAS</h2>
              Lunes a viernes de 09:00H - 13:30H
            </p>
          </article>
          <article>
            <p className="responsive-text">
              <h2 className="h2 ml-2 mb-0 text-green">TARIFAS DE MAÑANAS</h2>
              Pista completa 22€ (5,50€ cada Jugador)
            </p>
          </article>
          <article>
            <p className="responsive-text">
              <h2 className="h2 ml-2 mb-0 text-green">
                HORARIOS DE TARDES Y FIN DE SEMANA
              </h2>
              Lunes a viernes de 15:00H - 23:00H Sábados de 10:00H - 20:30H
              Domingos de 9:30H - 14:00H
            </p>
          </article>
          <article>
            <p className="responsive-text">
              <h2 className="h2 ml-2 mb-0 text-green">
                TARIFAS DE TARDES Y FIN DE SEMANA
              </h2>
              Pista completa 26€ (6,50€ cada Jugador) Bono Personal 5 Partidos
              26€ (5,20€ cada Jugador)
            </p>
          </article>

          <div class="container mt-5 text-center">
            <button onClick={handleButtonClick} className="btn custom-button">¿A qué esperas? ¡Haz ya tu reserva!</button>
          </div>
        </section>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
