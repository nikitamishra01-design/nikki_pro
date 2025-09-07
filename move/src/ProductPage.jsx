
import React from 'react';
import { products } from './data/product';
import "./productPage.css";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();


  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    cartItems.push(product);

    
    localStorage.setItem("cartItems", JSON.stringify(cartItems));


    alert(`${product.name} added to cart!`);


    navigate("/cart");
  };

  return (
    <div className='box'>
      <h2>Product List</h2>
      <ul className='box1'>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <h2>{product.name}</h2>
            <h3>Price: ₹{product.price}</h3>
            <img className='box3' src={product.image} alt={product.name} />
            <p>{product.desc}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
