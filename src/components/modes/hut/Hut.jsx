import React from 'react';
import './hut.css'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import GamemodeLogo from '../../gamemodeLogo/GamemodeLogo';
import { PiBeerBottleFill } from "react-icons/pi";
import { TbHandOff } from "react-icons/tb";
import { FaSkullCrossbones } from "react-icons/fa";



const Hut = () => {
    const currentMode = "Hut";

  return (
    <div>
      <div className='homeIconContainerHut'>
        <Link to="/">
            <a className='homeIcon'><FaHome /></a>
        </Link>
        <GamemodeLogo mode={currentMode}/>
      </div>
      <div className="hutHomeContainer">
        
          <div className="btnGamemodeContainer">
            <Link to="./nadaDebe">
              <button className="button-87" role="button">El que nada Debe...<FaSkullCrossbones /></button>
            </Link>
          </div>
        
          <div className="btnGamemodeContainer">
            <Link to="./verdadShot">
              <button className="button-87" role="button">Verdad o shot <PiBeerBottleFill /></button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Hut;
