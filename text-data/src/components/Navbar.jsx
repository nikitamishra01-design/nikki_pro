import React, { useState } from 'react';
import "./navbar.css";
import Box from '../Box';

 function Navbar(){

    const [open, setOpen] = useState(false);

    return(
      <div>
       <nav className='navbar'>
       <h2 className='logo'> myShop</h2>

      <div className='hamburger' onClick={()=> setOpen(!open)}>
      {open ? "×" : "⋮"}

      </div>
      <div className={`menu ${open ? "active" :""}`}>
        <a href="/">home</a>
          <a href="/">product</a>
            <a href="/">about</a>
              <a href="/">contact</a>
    
      </div>
      
       </nav>
    <Box />
      
       </div>
       
    );
 };
export default Navbar;


