import React from 'react';

const Products = ({ products, onClick }) => {
    console.log(products);
    const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png'
    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.id} >
                        {product.name}
                        <img src={defaultImg} alt="defImg" style={{ width: "140px" }}/>
                        <button onClick={() => onClick(product.id)}>add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
