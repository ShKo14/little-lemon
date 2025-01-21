import React, { useState } from 'react';
import './Reservation.css';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`);
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <h2>Reserve Your Table</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <label>
        Number of Guests:
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />
      </label>
      <button type="submit" className="submit-btn">Reserve</button>
    </form>
  );
}

export default Reservation;
