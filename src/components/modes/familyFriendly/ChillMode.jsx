import React from 'react';
import Logo from "../../logo/Logo.jsx";
import './chillMode.css';
import { Link } from 'react-router-dom';
import { GiCardRandom } from "react-icons/gi";
import { PiBeerBottleFill } from "react-icons/pi";
import { TbHandOff } from "react-icons/tb";
import { FaHome } from "react-icons/fa";

function ChillMode() {
  return (
    <div className="App">
      <div className='homeIconContainer'>
      <Link to='/'>
       <a className='homeIcon'><FaHome /></a>
      </Link>
      </div>
      <div className="chillHomeContainer">
          <div className="btnGamemodeContainer">
            <Link to='/classic'>
              <button className="button-85" role="button">Random<GiCardRandom /></button>
            </Link>
          </div>
        
          <div className="btnGamemodeContainer">
            <Link to="/verdadoshot">
              <button className="button-85" role="button">Verdad o shot <PiBeerBottleFill /></button>
            </Link>
          </div>

          <div className="btnGamemodeContainer">
            <Link to="/yonuncanunca">
              <button className="button-85" role="button">Yo nunca nunca <TbHandOff/></button>
            </Link>
          </div>
        </div>
        
      </div>
  );
}

export default ChillMode;
