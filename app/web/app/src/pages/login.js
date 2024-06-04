import {React, useState, useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../App.css";

export default function User(props) {

  return (
    <div className="mainContent">
      {/* HEADER-NAVBAR */}
      <Header />

      {/* MAIN PAGE CONTENT */}
      <div className="main content bg-translucent">
        
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}