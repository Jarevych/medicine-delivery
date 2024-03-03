import { fetchStores } from 'api';
import Products from '../components/ProductsComponent';
import Stores from '../components/StoresComponent';
import React, { useEffect, useState } from 'react';
import { StyledContainer } from './HomePageStyled';

const HomePage = () => {
  const [storeList, setStoreList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');
  const [added, setAdded] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setAdded(JSON.parse(savedCart));
    }
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const getAllStores = async () => {
    try {
      const data = await fetchStores();
      console.log(data);
      const stores = data.map(pharmacy => ({
        id: pharmacy.id,
        name: pharmacy.name,
        medicines: pharmacy.medicines,
      }));
      setStoreList(stores);
      console.log(stores);
      if (stores.length > 0) {
        setSelectedStore(stores[0]); // Встановлення обраного магазину за замовчуванням
        setProductList(stores[0].medicines); // Встановлення списку продуктів для обраного магазину
      }
    //   const products = data.medicines;
    //   setProductList(products);
    //   setSelectedStore(stores[0]);
    } catch (error) {}
  };
  console.log(productList);

  useEffect(() => {
    getAllStores();
  }, []);

  const HandleStoreSelect = storeId => {
    const selected = storeList.find(store => store.id === storeId);
    if (selected) {
      setSelectedStore(selected);
      console.log(selected);
      setProductList(selected.medicines);
    }
  };

  const addToCart = productId => {
    const selectedProduct = productList.find(
      product => product.id === productId
    );
    if (selectedStore) {
      const productWithStore = {
        ...selectedProduct,
        pharmacy: { name: selectedStore.name, id: selectedStore.id },
      };
      setAdded(prevAdded => [...prevAdded, productWithStore]);
      localStorage.setItem(
        'cart',
        JSON.stringify([...added, productWithStore])
      );
    }
  };

  const addToFavorites = product => {
    const isProductInFav = favorites.some(item => item.id === product.id);
    if (isProductInFav) {
      const updateFavorites = favorites.filter(item => item.id !== product.id);
      setFavorites(updateFavorites);
      localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    } else {
        const updateFavorites = [...favorites, product]
      setFavorites(updateFavorites);
      localStorage.setItem(
        'favorites',
        JSON.stringify(updateFavorites)
      );
    }
  };

  console.log(added);
  return (
    <StyledContainer>
      <Stores stores={storeList} onSelect={HandleStoreSelect} />
      {selectedStore && (
        <Products
          medicines={productList}
          onClick={addToCart}
          onAddToFavorites={addToFavorites}
          favorites={favorites}
        />
      )}
    </StyledContainer>
  );
};

export default HomePage;
