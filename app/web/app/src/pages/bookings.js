import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../App.css";
import { Calendar } from "../components/calendar";

export default function Bookings(props) {

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