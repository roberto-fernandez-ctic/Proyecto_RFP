import React from "react";

export default function Footer(props) {
  return (
    <footer className="footer">
    <div className="container border-top border-green">
      <div className="row">
        <div className="d-flex justify-content-center">
          <ul className="nav nav-footer text-center">
            <li className="col-3 nav-item nav-link link-dark align-self-center">© 2024 </li>
            <li className=" col-3 nav-item nav-link link-dark align-self-center">
              Pádel Mánager - Roberto Fernández
            </li>
            <li className="col-3 nav-item align-self-center">
              <a
                href="https://ibq.es/"
                className="nav-link link-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                I.E.S Bernaldo de Quirós
              </a>
            </li>
            <li className="col-3 nav-item align-self-center">
              <a
                href="https://www.fundacionctic.org/es/aviso-legal"
                className="nav-link link-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aviso Legal
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}
