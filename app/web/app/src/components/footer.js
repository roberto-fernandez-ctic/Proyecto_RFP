import React from "react";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="row">
        <div className="d-flex justify-content-center">
          <ul className="nav nav-footer text-center">
            <li className="nav-item nav-link">© 2024 </li>

            <li className="nav-item">
              <a
                href="https://www.fundacionctic.org/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                CTIC
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.fundacionctic.org/es/sobre-ctic"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              > Sobre nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.fundacionctic.org/es/aviso-legal"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aviso legal
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
