import React, { useState } from 'react';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

 const ShoppingCart = ({ added }) => {
   

        // console.log(products)
        const [cart, setCart] = useState([])
    const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png'
    console.log(cart)
    useEffect(() => {
        const savedItem = localStorage.getItem('cart');
        if(savedItem) {
            setCart(JSON.parse(savedItem))
        }
    },[])
    const deleteItem = (productId) => {
       const updateCart = cart.filter(item => item.id !== productId)
       setCart(updateCart)
       localStorage.setItem('cart', JSON.stringify(updateCart))
    }

return (
    <div>
        <ul>
            {cart.map(product => (
                <li key={product.id}>
                    <p>{product.name}</p>
                    <img src={defaultImg} alt="defImg" style={{ width: "140px" }}/>
                    <button onClick={() => deleteItem(product.id)}>delete</button>
                </li>
            ))}
        </ul>
    </div>
)

}

export default ShoppingCart