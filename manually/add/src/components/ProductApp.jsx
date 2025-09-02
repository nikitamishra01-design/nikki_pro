
import React, { useState, useEffect } from 'react';
import './ProductApp.css';

const ProductApp = () => {
  // localStorage se products load karo
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // jab products change ho, localStorage me save kar do
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (!name || !price || !image) {
      alert("Please fill all the fields");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name,
      price,
      image,
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className='container'>
      <h1>ADD Products</h1>
      <div className='in'>

      <input 
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input 
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />

      <input 
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      </div>

      <button onClick={addProduct}>Add Product</button>

      <h3>Products List</h3>
      <div className='product-list'>
        {products.map((p) => (
          <div key={p.id} className='product-card'> 
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductApp;
