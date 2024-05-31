import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Map from "../components/map";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Contact(props) {
    return (
        <div>
            <Header />
            <div className="main content bg-translucent">
                <h1 className="h1 ml-2 mb-3 text-uppercase text-green">¡Contáctanos!</h1>
            </div>
            <Map />
            <Footer />
        </div>
    );
}
