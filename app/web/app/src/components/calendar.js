import { React, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import DatePicker from "react-datepicker";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState([]);
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 7);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Simulación de disponibilidad, aquí deberías hacer una llamada a tu API para obtener los datos reales
    const fakeAvailability = [
      { time: '08:00', available: true },
      { time: '09:00', available: false },
      { time: '10:00', available: true },
      // ... más datos de disponibilidad
    ];
    setAvailability(fakeAvailability);
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
        <div className="availability mt-4">
          <h3 className="text-center">Disponibilidad para {selectedDate.toLocaleDateString()}</h3>
          <ul className="list-group">
            {availability.filter(slot => slot.available).map((slot, index) => (
              <li key={index} className="list-group-item list-group-item-success">
                {slot.time} - Disponible
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
