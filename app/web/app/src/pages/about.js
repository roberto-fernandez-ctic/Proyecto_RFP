import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Map from "../components/map";
import "../App.css";

export default function About(props) {
  return (
    <div className="mainContent">
      <Header />
      <div className="main content bg-translucent">
        <h1 className="text-light responsive-text">Faro Busto Pádel Club</h1>
        <section>
          <h2 className="text-green responsive-text">¿Quiénes somos?</h2>
          <p>
            Somos Faro Busto Pádel Club, un centro deportivo dedicado al pádel,
            ubicado en el hermoso entorno de Luarca, Asturias. Nuestro club
            nació de la pasión por el deporte y el deseo de crear un espacio
            donde los amantes del pádel de todas las edades y niveles puedan
            disfrutar, aprender y mejorar su juego. Nos enorgullecemos de ser
            una comunidad unida por el amor al pádel y el espíritu deportivo.
          </p>
        </section>

        <section>
          <h2 className="text-green responsive-text">¿Qué hacemos?</h2>
          <p>
            En Faro Busto Pádel Club ofrecemos una amplia gama de actividades y
            servicios diseñados para satisfacer las necesidades de nuestros
            socios y visitantes. Contamos con modernas instalaciones de pádel,
            incluyendo varias pistas de alta calidad para partidos y
            entrenamientos. Ofrecemos clases y entrenamientos impartidos por
            entrenadores profesionales, torneos y eventos para todos los
            niveles, y programas especiales para niños y jóvenes. Además,
            organizamos actividades sociales y de ocio para fomentar la
            camaradería y el espíritu de equipo entre nuestros miembros.
          </p>
        </section>

        <section>
          <h2 className="text-green responsive-text">¿Dónde estamos?</h2>
          <p>
            Nos encontramos en Luarca, Asturias, un entorno natural privilegiado
            que combina la belleza del paisaje costero con la tranquilidad del
            campo. Nuestro club está ubicado cerca del Faro Busto, un lugar
            emblemático que inspira nuestro nombre y simboliza nuestro
            compromiso con la excelencia y la guía en el deporte del pádel. Las
            instalaciones están diseñadas para ofrecer un ambiente acogedor y
            estimulante, ideal para la práctica del deporte y la convivencia
            social.
          </p>
        </section>

        <section>
          <h2 className="text-green responsive-text">¿Qué pretendemos?</h2>
          <p>
            Nuestro objetivo es ser el centro de referencia para la práctica del
            pádel en Asturias y más allá. Pretendemos promover un estilo de vida
            saludable y activo a través del deporte, creando una comunidad
            inclusiva y apasionada. Buscamos ofrecer experiencias deportivas de
            alta calidad, desde la formación de nuevos jugadores hasta la mejora
            continua de los más experimentados. Además, nos esforzamos por ser
            un punto de encuentro donde el deporte, la diversión y la amistad se
            unan, contribuyendo al bienestar físico y emocional de nuestros
            socios y visitantes.
          </p>
        </section>
        <section>
          <h2 className="text-green responsive-text">Nuestras instalaciones</h2>
          <p>
            En Faro Busto Pádel Club, contamos con instalaciones de primera
            clase para asegurar que nuestros socios y visitantes tengan la mejor
            experiencia posible. Disponemos de varias pistas de pádel de alta
            calidad, tanto cubiertas como al aire libre, que permiten la
            práctica del deporte durante todo el año. Nuestras pistas están
            diseñadas con las mejores superficies y cuentan con iluminación
            profesional para partidos nocturnos.
          </p>
          <p>
            Además, nuestras instalaciones incluyen vestuarios modernos y bien
            equipados, una tienda de artículos deportivos especializada en
            pádel, y una acogedora cafetería donde los jugadores pueden
            relajarse y socializar después de los partidos. También disponemos
            de áreas de descanso y espacios verdes, creando un ambiente
            agradable y saludable para todos nuestros miembros.
          </p>
        </section>
      </div>
      <Map />
      <Footer />
    </div>
  );
}
