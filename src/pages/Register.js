import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import '../styles/Register.css';


const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`https://job-backend-render-2.onrender.com/auth/register`, formData);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
  console.error('Registration failed:', err.response?.data || err.message);
  alert(err.response?.data?.message || 'Registration failed');
}

  };

  return (
    <div className="register-page">
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
      <p className="link">
          Already have an account? <a href="/auth/login">Login</a>
        </p>
    </form>
    </div>
  );
};

export default Register;
