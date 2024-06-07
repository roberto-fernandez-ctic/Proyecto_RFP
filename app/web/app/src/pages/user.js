import { React, useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import devConfig from "../config.dev.json";
import "../App.css";

export default function User(props) {

  const navigate = useNavigate();

  useEffect(() => {
    console.log("DEVELOPMENT CONFIGURATION:");
    console.log(devConfig);
    window.CONFIG = devConfig;
  }, []);

  const [user, setUser] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [id, setId] = useState();

  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user");
    // Update state
    setUser(null);
  };


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setId(parsedUser.id);  // Set ID from the parsed user object
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!id) return;
      try {
        const response = await fetch(`${window.CONFIG.SERVER_BASE_URL}/bookings/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, [id]);

  // Helper function to format the date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  };

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="mainContent">
      {/* HEADER-NAVBAR */}
      <Header />

      {/* MAIN PAGE CONTENT */}
      <div className="main content bg-translucent d-flex justify-content-center">
        {user ? (
          <div className="text-center">
            <h2 className="h2 ml-2 mb-3 text-green">¡Bienvenido, {user.username}!</h2>
            <p>Nombre y apellidos: {user.name}</p>
            {/* Mostrar las reservas */}
            <div>
              <h3 className="h3 ml-2 mb-3">Reservas asociadas al usuario:</h3>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div className="bg-light text-dark form pt-2 pb-2 border border-round" key={booking.id}>

                    <span><strong>Reserva:</strong> {formatDate(booking.date)} de la pista {booking.id_court}</span>
                    {/* Otros detalles de la reserva */}
                  </div>
                ))
              ) : (
                <p>No se han encontrado reservas asociadas a este usuario.</p>
              )}
            </div>
            <div class="container mt-2 text-center">
              <button onClick={handleLogout} className="btn custom-button">Salir</button>
            </div>
          </div>
        ) : (
          <div>
            <p>
              No user is currently logged in.
            </p>
            
          <div class="container mt-5">
            <button onClick={handleButtonClick} className="btn custom-button">Volver</button>
          </div>

          </div>

        )}

      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
