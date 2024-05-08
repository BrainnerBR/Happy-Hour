import React from 'react';
import './hidratacion.css'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import GamemodeLogo from '../../gamemodeLogo/GamemodeLogo';
import { GiCardRandom } from "react-icons/gi";
import { GiBrainstorm } from "react-icons/gi";
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
            <Link to="./random">
              <button className="button-87" role="button">Random <GiCardRandom /></button>
            </Link>
          </div>

          <div className="btnGamemodeContainer">
            <Link to="./piensaRapido">
              <button className="button-87" role="button">Piensa Rapido <GiBrainstorm />
</button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default RompeAmistades;
