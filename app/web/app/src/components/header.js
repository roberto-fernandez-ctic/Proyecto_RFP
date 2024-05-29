import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Header(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <img src="/logo_fondo_crop.png" alt="logo manager" style={{width: "6rem", margin: "1rem", borderRadius: "5rem"}}/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex w-100 justify-content-between">
            
            <li className="nav-item align-self-center text-center flex-grow-1">
              <a className="nav-link" href="#">
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item align-self-center text-center flex-grow-1">
              <a className="nav-link" href="#">
                Tarifas y horarios
              </a>
            </li>
            <li className="nav-item align-self-center text-center flex-grow-1">
              <a className="nav-link" href="#">
                Tienda
              </a>
            </li>
            <li className="nav-item align-self-center text-center flex-grow-1">
              <a className="nav-link text-center" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item align-self-center text-center flex-grow-1">
              <a className="nav-link btn border border-success btn-outline-success" href="#">
                RESERVAS
              </a>
            </li>
            <li className="nav-item flex-grow-1 text-center">
              <a className="nav-link align-self-center" href="#">
                <img src="/user.svg" alt="user_icon" style={{width: "2.5rem"}}/>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
}