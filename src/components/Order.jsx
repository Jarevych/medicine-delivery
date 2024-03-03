import { OrderStyled } from './OrderStyled';
import React, { useState } from 'react';


const Order = ({cart}) => {
    // const [checkedItems, setCheckedItems] = useState([cart])
    const [formData, setFormData] = useState({
        name: null,
        phone: null,
        email: null,
        address: null,
        drags: null
    })

    console.log(cart)
    // const orederedItems = localStorage.getItem(JSON.parse 'cart');



    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData(prevData => ({
            ...prevData, 
            [name]: value
        })); 
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(formData);
        setFormData({
            name: '',
        phone: '',
        email: '',
        address: '',
        drugs: cart
        })
    }

    return (
        <OrderStyled>
        <form className='form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className='input'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          className='input'
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          className='input'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          className='input'
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
    )
}

export default Order;