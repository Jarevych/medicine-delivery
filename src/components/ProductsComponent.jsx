import React, { useEffect, useState } from 'react';
import { ProductsStyled } from './ProductsComponentStyled';
import { ReactComponent as IconActive } from '../assets/favor-active.svg';
import { ReactComponent as IconNormal } from '../assets/favor-normal.svg';

const Products = ({ medicines, onClick, onAddToFavorites, favorites }) => {
  const [products, setProducts] = useState([]);
  const [favs, setFavs] = useState(favorites);
  const [sortedItems, setSortedItems] = useState([]);

  const isFavorite = productId => {
    return favs.some(item => item.id === productId);
  };

  const sortMedicine = medicines
    .filter(product => isFavorite(product.id))
    .concat(medicines.filter(product => !isFavorite(product.id)));

  console.log(sortMedicine);
  useEffect(() => {
    setSortedItems(sortMedicine);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFavs(favorites);
  }, [favorites]);

  console.log(products);

  const sortByPrice = () => {
    const sortedProducts = [...sortMedicine].sort((a, b) => a.price - b.price);
    setSortedItems(sortedProducts);
  };

  const HandleSort = () => {
    sortByPrice();
  };

  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png';
  return (
    <ProductsStyled>
      <button onClick={HandleSort}>Sort by price</button>

      <ul>
        {sortedItems.map(product => (
          <li key={product.id}>
            {product.name}

            <button
              type="button"
              className="favor"
              onClick={() => onAddToFavorites(product)}
            >
              {isFavorite(product.id) ? <IconActive /> : <IconNormal />}
            </button>

            <img src={defaultImg} alt="defImg" style={{ width: '140px' }} />
            <p>{product.price}</p>
            <button onClick={() => onClick(product.id)}>add to cart</button>
          </li>
        ))}
      </ul>
    </ProductsStyled>
  );
};

export default Products;
