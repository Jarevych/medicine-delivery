import React, { useState } from 'react';

const Products = ({ medicines, onClick }) => {
    const [products, setProducts] = useState(medicines)
    // useEffect(() => {
    //     setProducts(medicines)
    // }, [medic])

    console.log(products);
    const sortByPrice = () => {
        const sortedProducts = [...products].sort((a,b) => a.price - b.price);
        setProducts(sortedProducts)
    }

    const HandleSort = () => {
        sortByPrice()
    }
    const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png'
    return (
        <div>
            <button onClick={HandleSort}>Sort by price</button>
            <ul>
                {products.map(product => (
                    <li key={product.id} >
                        {product.name}
                        <img src={defaultImg} alt="defImg" style={{ width: "140px" }}/>
                        <p>{product.price}</p>
                        <button onClick={() => onClick(product.id)}>add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
