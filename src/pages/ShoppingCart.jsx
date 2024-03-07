import React, { useState } from 'react';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { ShoppingStyledContainer } from './ShoppingCartStyled';
import Order from 'components/Order';
import MapComponent from 'components/MapComponent';

const ShoppingCart = ({ added }) => {
  // console.log(products)
  const [cart, setCart] = useState([]);
  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png';
  useEffect(() => {
    const savedItem = localStorage.getItem('cart');
    if (savedItem) {
      setCart(JSON.parse(savedItem));
    }
  }, []);
  const deleteItem = productId => {
    const updateCart = cart.filter(item => item.id !== productId);
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };
  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) {
      deleteItem(productId);
    } else {
      const updateCart = cart.map(item => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
      setCart(updateCart);
      localStorage.setItem('cart', JSON.stringify(updateCart));
    }
  };

  return (
    <div>
      <ShoppingStyledContainer>
        <div className="left-side">

          <Order cart={cart} />
          </div>
          <div className="list">
            <ul>
              {cart.map(product => (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <img
                    src={defaultImg}
                    alt="defImg"
                    style={{ width: '140px' }}
                  />
                  <div className='price'>

                  <p>{product.price}</p>
                  <input
                    className='quantity'
                    type="number"
                    value={product.quantity || 1}
                    onChange={e =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                  />
                  </div>
                  <button onClick={() => deleteItem(product.id)}>delete</button>
                </li>
              ))}
            </ul>
         
        </div>
      </ShoppingStyledContainer>
    </div>
  );
};

export default ShoppingCart;
