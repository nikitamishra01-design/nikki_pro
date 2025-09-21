
import React, { useEffect, useState } from "react";
import axios from "axios";

function Show() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/public/data/products.json") 
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <p>{item.desc}</p>
          <p><b>₹{item.price}</b></p>
        </div>
      ))}
    </div>
  );
}

export default Show;
