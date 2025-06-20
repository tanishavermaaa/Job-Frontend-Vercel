import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post('/auth/login', formData);
    localStorage.setItem('token', res.data.token);
    alert('Login successful');
    navigate('/dashboard');
  } catch (err) {
    console.error(err); // 👈 Add this
    alert(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <div className="login-page">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      <p className="link">Don't have an account? <a href="/register">Register</a></p>
    </form>
    </div>
  );
};

export default Login;
