import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import devConfig from "../config.dev.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("DEVELOPMENT CONFIGURATION:");
    console.log(devConfig);
    window.CONFIG = devConfig;
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState({});
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);

  const courts = [1, 2, 3]; // Lista de pistas

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 7);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAvailability({});
  };

  useEffect(() => {
    if (selectedDate) {
      fetch(`${window.CONFIG.SERVER_BASE_URL}/bookings`)
        .then((response) => response.json())
        .then((data) => {
          generateAvailability(data);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedDate]);

  const generateAvailability = (reservations) => {
    const startHour = 9; // 9 AM
    const endHour = 21; // 9 PM
    const interval = 60; // 60 minutos

    const slots = courts.reduce((acc, court) => {
      acc[court] = [];
      return acc;
    }, {});

    courts.forEach(court => {
      const date = new Date(selectedDate);
      date.setHours(startHour, 0, 0);

      while (date.getHours() <= endHour) {
        const now = new Date();
        const isToday = date.toDateString() === now.toDateString();
        const isPast = isToday && date.getTime() < now.getTime();

        const isBooked = reservations.some((element) => {
          let reserve = new Date(element.date);
          reserve.setHours(reserve.getHours() - 2);
          return reserve.getHours() === date.getHours() && date.getDate() === reserve.getDate() && element.id_court === court;
        });
  
        if (!isBooked && !isPast) {
          slots[court].push({
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            available: true,
          });
        }

        date.setMinutes(date.getMinutes() + interval);
      }
    });

    setAvailability(slots);
  };

  const handleOpenModal = (court, slot) => {
    setSelectedCourt(court);
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleConfirm = () => {
    if (user && selectedSlot && selectedCourt) {
      const [hours, minutes] = selectedSlot.time.split(':').map(Number);
      const adjustedDate = new Date(selectedDate);
      adjustedDate.setHours(hours + 2, minutes); // Ajustar la hora a GMT+2

      const bookingDate = adjustedDate.toISOString();
      

      fetch(`${window.CONFIG.SERVER_BASE_URL}/booking/${bookingDate}/${selectedCourt}/${user.id}`, {
        method: "POST"
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Booking created:", data);
          if (selectedDate) {
            fetch(`${window.CONFIG.SERVER_BASE_URL}/bookings`)
              .then((response) => response.json())
              .then((data) => {
                generateAvailability(data);
              })
              .catch((error) => console.log(error));
          }
          alert("¡Se ha realizado la reserva de la pista correctamente!")
        })
        .catch((error) => {
          console.error("Error creating booking:", error);
        });
    } else {
      alert("¡Debes iniciar sesión para realizar una reserva!");
      navigate("/login")
    }
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={today} // Establecer la fecha mínima para que los días pasados no estén disponibles
            maxDate={maxDate} // Establecer la fecha máxima a 8 días desde hoy
          />
        </div>
      </div>

      {selectedDate && (
        <div className="availability mt-3">
          <h3 className="text-center">Disponibilidad para {selectedDate.toLocaleDateString()}</h3>
          {courts.map((court) => (
            <div key={court}>
              <h2>Pista {court}</h2>
              <ul className="list-group mb-3">
                {availability[court] && availability[court].map((slot, index) => (
                  <li key={index} className="list-group-item list-group-item-success">
                    <Button variant="secondary" onClick={() => handleOpenModal(court, slot)}>
                      {slot.time}
                    </Button>
                  </li>
                ))}
                {availability[court] && availability[court].length === 0 && (
                  <li className="list-group-item list-group-item-danger">No hay horas disponibles para esta pista</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Realizar reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás completamente seguro de que deseas realizar una reserva a esta hora?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
