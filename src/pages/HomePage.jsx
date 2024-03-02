import { fetchStores } from 'api';
import Products from 'components/ProductsComponent';
import Stores from 'components/StoresComponent';
import React, { useCallback, useEffect, useState } from 'react';

const HomePage = () => {
  const [storeList, setStoreList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');
  const [added, setAdded] = useState([])

useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if(savedCart) {
        setAdded(JSON.parse(savedCart))
    }
},[])
  
  const getAllStores = useCallback(async () => {
    try {
      const data = await fetchStores();
      console.log(data);
      const stores = data.map(pharmacy => ({
        id: pharmacy.id,
        name: pharmacy.name,
        medicines: pharmacy.medicines
      }));
      setStoreList(stores);
      console.log(stores);
      const products = data[0].medicines;
      setProductList(products);
    } catch (error) {}
  });
  console.log(productList);

  useEffect(() => {
    getAllStores();
  }, []);

  const HandleStoreSelect = storeId => {
    const selected = storeList.find(store => store.id === storeId);
    if (selected) {
      setSelectedStore(selected);
      console.log(selected)
      setProductList(selected.medicines);
    }
  };

  const addToCart = (productId) => {
    const selectedProduct = productList.find(product => product.id === productId);
    if(selectedStore) {
        const productWithStore = {
            ...selectedProduct, pharmacy: {name: selectedStore.name, id: selectedStore.id} 
        }
        setAdded(prevAdded => [...prevAdded, productWithStore])
        localStorage.setItem('cart', JSON.stringify([...added, productWithStore]));
    }
  }
  console.log(added)
  return (
    <div>
      <Stores stores={storeList} onSelect={HandleStoreSelect} />
     {selectedStore && <Products products={productList} onClick={addToCart}/>}
    </div>
  );
};

export default HomePage;
