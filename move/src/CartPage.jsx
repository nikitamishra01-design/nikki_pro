
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import karo
import "./cartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // navigate hook initialize karo

  // Page load hote hi localStorage se items le lo
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  // Item delete karne ka function
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Total price calculate karo
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-box">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <button className="delete-btn" onClick={() => removeFromCart(index)}>
                Delete
              </button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
        </div>
      )}
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Products
      </button>
    </div>
  );
};

export default CartPage;
