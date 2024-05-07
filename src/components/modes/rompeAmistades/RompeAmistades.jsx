import React from 'react';
import './rompeAmistades.css'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import GamemodeLogo from '../../gamemodeLogo/GamemodeLogo';
import { GiCardRandom } from "react-icons/gi";
import { PiBeerBottleFill } from "react-icons/pi";
import { TbHandOff } from "react-icons/tb";


const RompeAmistades = () => {
    const currentMode = "Rompe Amistades";

  return (
    <div>
      <div className='homeIconContainerRompeAmistades'>
        <Link to="/">
            <a className='homeIcon'><FaHome /></a>
        </Link>
        <GamemodeLogo mode={currentMode}/>
      </div>
      <div className="rompeAmistadesHomeContainer">
          <div className="btnGamemodeContainer">
            <Link to='./random'>
              <button className="button-87" role="button">Random<GiCardRandom /></button>
            </Link>
          </div>
        
          <div className="btnGamemodeContainer">
            <Link to="./verdadoshot">
              <button className="button-87" role="button">Verdad o shot <PiBeerBottleFill /></button>
            </Link>
          </div>

          <div className="btnGamemodeContainer">
            <Link to="./yonuncanunca">
              <button className="button-87" role="button">Yo nunca nunca <TbHandOff/></button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default RompeAmistades;
