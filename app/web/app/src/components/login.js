import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import devConfig from "../config.dev.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {

    useEffect(() => {
        console.log("DEVELOPMENT CONFIGURATION:");
        console.log(devConfig);
        window.CONFIG = devConfig;
      }, []);

  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (localStorage.getItem("user")) {
    const [user, setUser] = localStorage.getItem("user");
  } /* else {
    const [user, setUser] = "";
  } */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${window.CONFIG.SERVER_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        // Maneja el éxito del inicio de sesión, por ejemplo, redirigiendo al usuario
        console.log('Login successful', data);
        alert(data.user.username + " ha iniciado sesión con éxito!");
        setForm({ username: '', password: '' });
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate('/user');
      } else {
        // Maneja errores de inicio de sesión
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Server error');
    }
  };

  return (
    <div className="container mt-5 form">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn bg-green border border-dark btn-block mt-3">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
