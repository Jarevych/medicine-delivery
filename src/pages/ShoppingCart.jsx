import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

 const ShoppingCart = ({ added }) => {
   

        // console.log(products)
        const [cart, setCart] = useState([])
    const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png'

    useEffect(() => {
        const savedItem = localStorage.getItem('cart');
        if(savedItem) {
            setCart(JSON.parse(savedItem))
        }
    },[])

return (
    <div>
        <ul>
            {cart.map(product => (
                <li key={product.id}>
                    <p>{product.name}</p>
                    <img src={defaultImg} alt="defImg" style={{ width: "140px" }}/>
                </li>
            ))}
        </ul>
    </div>
)

}

export default ShoppingCart