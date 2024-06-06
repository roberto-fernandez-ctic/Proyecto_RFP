import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import devConfig from "../config.dev.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar() {
  useEffect(() => {
    console.log("DEVELOPMENT CONFIGURATION:");
    console.log(devConfig);
    window.CONFIG = devConfig;
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

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
    setAvailability([]);
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
    const interval = 60; // 60 minutes

    const slots = [];
    const date = new Date(selectedDate);
    date.setHours(startHour, 0, 0);

    while (date.getHours() <= endHour) {
      const isBooked = reservations.some((element) => {
        let reserve = new Date(element.date);
        reserve.setHours(reserve.getHours() - 2);
        return reserve.getHours() === date.getHours() && date.getDate() === reserve.getDate();
      });

      if (!isBooked) {
        slots.push({
          time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          available: true,
        });
      }

      date.setMinutes(date.getMinutes() + interval);
    }

    setAvailability(slots);
  };

  const handleOpenModal = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleConfirm = () => {
    if (user && selectedSlot) {
    // Obtener la fecha seleccionada como cadena en formato 'YYYY-MM-DD'
    const datePart = selectedDate.toLocaleDateString('en-CA'); // 'en-CA' da el formato 'YYYY-MM-DD'
    const [hours, minutes] = selectedSlot.time.split(':').map(Number);
    const adjustedDate = new Date(selectedDate);
    adjustedDate.setHours(hours + 2, minutes); // Ajustar la hora a GMT+2

    const bookingDate = adjustedDate.toISOString(); 
    // Combinar la fecha y la hora del slot seleccionado
      const courtId = 1; // Esto debe ser dinámico si tienes múltiples canchas
      console.log(bookingDate + "   " + selectedDate)

      fetch(`${window.CONFIG.SERVER_BASE_URL}/booking/${bookingDate}/${courtId}/${user.id}`, {
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
          <ul className="list-group">
            <h2>PISTA 1</h2>
            {availability.map((slot, index) => (
              <li key={index} className="list-group-item list-group-item-success">
                <Button variant="primary" onClick={() => handleOpenModal(slot)}>
                  {slot.time}
                </Button>
              </li>
            ))}
          </ul>
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
