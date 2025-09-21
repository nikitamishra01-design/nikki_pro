
import React, { useState } from "react";
const Counter = () => {
    const [count,setCount] = useState(0);
    return(
        <div style={{display:"flex",justifyContent:"center", alignItems:"center", height:"100vh", }}>
    
        <div style={{ textAlign:"center",height:"200px", width:"300px", padding:"20", border:"2px solid white",borderRadius: "10px",  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <h1>counter </h1>
        <p>increase and decrease number {count}</p>
        <button className="box3" onClick={()=> setCount(count+1)}>increase</button>
       <button onClick={()=> setCount(count-1)}>decrease</button>
        </div>
        </div>
    )
}
export default Counter;