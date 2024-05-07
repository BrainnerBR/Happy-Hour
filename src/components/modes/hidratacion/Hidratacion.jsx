import React from 'react';
import './hidratacion.css'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import GamemodeLogo from '../../gamemodeLogo/GamemodeLogo';
import { PiBeerBottleFill } from "react-icons/pi";
import { TbHandOff } from "react-icons/tb";
import { RiTimerFlashFill } from "react-icons/ri";


const RompeAmistades = () => {
    const currentMode = "Hidratacion";

  return (
    <div>
      <div className='homeIconContainerHidratacion'>
        <Link to="/">
            <a className='homeIcon'><FaHome /></a>
        </Link>
        <GamemodeLogo mode={currentMode}/>
      </div>
      <div className="hidratacionHomeContainer">
        
          <div className="btnGamemodeContainer">
            <Link to="./minutoHidratacion">
              <button className="button-87" role="button">Minuto de Hidratacion<RiTimerFlashFill /></button>
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
