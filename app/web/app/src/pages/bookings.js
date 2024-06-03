import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Calendar } from "../components/calendar";

export default function Bookings(props) {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/bookings');
  };
  return (
    <div className="mainContent">
      {/* HEADER-NAVBAR */}
      <Header />

      {/* MAIN PAGE CONTENT */}
      <div className="bg-translucent text-center">
        <Calendar />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}