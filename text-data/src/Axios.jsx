
import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products") // backend route
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{display:"flex",  flexWrap:"wrap", gap:"20px"}}>
      {products.map(product => (
        <div key={product.id} style={{ border:"1px solid #ccc",padding:"10px"  ,width:" 200px",}}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} style={{ width:"100%", height:"200px", objectFit:"cover"}} />
          <p>{product.desc}</p>
          <p><b>₹{product.price}</b></p>
        </div>
      ))}
    </div>
  );
}

export default Axios;
