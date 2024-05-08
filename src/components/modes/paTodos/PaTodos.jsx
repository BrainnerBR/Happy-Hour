import React from 'react';
import './paTodos.css';
import { Link } from 'react-router-dom';
import { GiCardRandom } from "react-icons/gi";
import { PiBeerBottleFill } from "react-icons/pi";
import { TbHandOff } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import GamemodeLogo from '../../gamemodeLogo/GamemodeLogo.jsx';

function PaTodos() {
  const currentMode = "Pa' Todos";

  return (
    <div>
      <div className='homeIconContainerPaTodos'>
        <Link to='/'>
          <a className='homeIcon'><FaHome /></a>
        </Link>
        <GamemodeLogo mode={currentMode}/>
      </div>
      <div className="paTodosHomeContainer">
          <div className="btnGamemodeContainer">
            <Link to='./classic'> 
              <button className="button-86" role="button">Random<GiCardRandom /></button>
            </Link>
          </div>
        
          <div className="btnGamemodeContainer">
            <Link to="./verdadoshot"> 
              <button className="button-86" role="button">Verdad o shot <PiBeerBottleFill /></button>
            </Link>
          </div>

          <div className="btnGamemodeContainer">
            <Link to="./yonuncanunca"> 
              <button className="button-86" role="button">Yo nunca nunca <TbHandOff/></button>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default PaTodos;
