import { addOrderHandler } from 'api';
import { OrderStyled } from './OrderStyled';
import React, { useState } from 'react';
import MapComponent from './MapComponent';

const Order = ({ cart }) => {
  // const [checkedItems, setCheckedItems] = useState([cart])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    drags: [],
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      drugs: cart,
    });
    addOrderHandler(formData);
  };

  return (
    <OrderStyled>
      <MapComponent />

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-form">
          <label htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="phone">Phone:</label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="email">E-mail:</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="address">Address:</label>
          <textarea
            className="input"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Buy</button>
      </form>
    </OrderStyled>
  );
};

export default Order;
