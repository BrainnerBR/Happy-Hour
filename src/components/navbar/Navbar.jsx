import React from 'react';
import './navbar.css'
import { FaRegSnowflake } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { GiBeerStein } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='mode chillMode'>
        <a><FaRegSnowflake /></a>
        </div>

        <div className='mode hutMode'>
        <a><FaFireAlt /></a>
        </div>

        <div className='mode drinkMode'>
        <a><GiBeerStein /></a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
