import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import devConfig from "../config.dev.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("DEVELOPMENT CONFIGURATION:");
    console.log(devConfig);
    window.CONFIG = devConfig;
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [checkingEmail, setCheckingEmail] = useState(false);

  const { name, email, password, confirmPassword, username } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'username') {
      checkUsernameAvailability(e.target.value);
    }

    if (e.target.name === 'email') {
      checkEmailAvailability(e.target.value);
    }
  };

  const checkUsernameAvailability = async (username) => {
    setCheckingUsername(true);
    try {
      const response = await fetch(`${window.CONFIG.SERVER_BASE_URL}/check-username`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      });
      const result = await response.json();
      setUsernameAvailable(result.available);
    } catch (error) {
      setError('Error checking username: ' + error.message);
    } finally {
      setCheckingUsername(false);
    }
  };

  const checkEmailAvailability = async (email) => {
    setCheckingEmail(true);
    try {
      const response = await fetch(`${window.CONFIG.SERVER_BASE_URL}/check-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      setEmailAvailable(result.available);
    } catch (error) {
      setError('Error checking email: ' + error.message);
    } finally {
      setCheckingEmail(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!usernameAvailable) {
      setError('Username is not available');
      return;
    }

    if (!emailAvailable) {
      setError('Email is not available');
      return;
    }

    try {
      const response = await fetch(`${window.CONFIG.SERVER_BASE_URL}/register-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, username })
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to register');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
      });

      // Opcional: redirigir al usuario a la página de inicio de sesión
      // navigate('/login');
    } catch (error) {
      setError('Error registering: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className='text-center text-green'>¡Regístrate!</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${!emailAvailable && !checkingEmail ? 'is-invalid' : ''}`}
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={onChange}
            required
          />
          {!emailAvailable && !checkingEmail && <div className="invalid-feedback">El email ya está en uso</div>}
          {checkingEmail && <div className="form-text">Comprobando disponibilidad...</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirme su contraseña"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            className={`form-control ${!usernameAvailable && !checkingUsername ? 'is-invalid' : ''}`}
            placeholder="Ingrese su nombre de usuario"
            value={username}
            onChange={onChange}
            required
          />
          {!usernameAvailable && !checkingUsername && <div className="invalid-feedback">El nombre de usuario no está disponible</div>}
          {checkingUsername && <div className="form-text">Comprobando disponibilidad...</div>}
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {success && <div className="alert alert-success" role="alert">¡Registro completo!</div>}
        <div className='d-flex justify-content-center'>
          <button type="submit" className="btn custom-button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
