import { React, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import devConfig from "../config.dev.json";
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
    console.log(reservations)
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
      return (reserve.getHours() === date.getHours() && date.getDay() === reserve.getDay()) 
      });
      console.log()

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
            {availability.map((slot, index) => (
              <li key={index} className="list-group-item list-group-item-success">
                <button style={{}}>{slot.time} - Disponible</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
