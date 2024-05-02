import React from 'react';
import './logo.css';
import { IoBeerSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav id='logo'>
         <span>Happy<br/>
         <span><IoBeerSharp/>Hour</span>
         </span>
      </nav>
    </div>
  );
}

export default Navbar;
