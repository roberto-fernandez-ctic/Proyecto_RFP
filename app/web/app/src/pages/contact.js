import { React, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Map from "../components/map";
import "../App.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:contacto@ejemplo.com?subject=Contacto desde la página web&body=Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div>
            <Header />
            <div className="main content bg-translucent p-4">
                <h1 className="h1 ml-2 mb-3 text-uppercase text-green">¡Contáctanos!</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="h2 mb-3">Información de contacto</h2>
                            <p className="text-justify">
                                Si tienes alguna pregunta o necesitas más información sobre nuestros
                                servicios, a continuación te proporcionamos nuestros datos de contacto:
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País
                                </li>
                                <li className="mb-2">
                                    <strong>Teléfono:</strong> +123 456 7890
                                </li>
                                <li className="mb-2">
                                    <strong>Email:</strong> contacto@ejemplo.com
                                </li>
                                <li className="mb-2">
                                    <strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h2 className="h2 mb-3">Formulario de contacto</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Tu email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tu mensaje"
                                        required
                                    ></textarea>
                                </div><br/>
                                <button type="submit" className="custom-button">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
