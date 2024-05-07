import React from 'react';
import './gamemodeLogo.css';
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { GiFlame } from "react-icons/gi";
import { FaBookDead } from "react-icons/fa";
import { IoIosBeer } from "react-icons/io";

const GamemodeLogo = ({ mode }) => {
  const modeIcons = {
    "Pa' Todos": <FaPeopleGroup />,
    "Rompe Amistades": <BsFillHeartbreakFill />,
    "Hidratacion": <IoIosBeer />, 
    "Hut" : <GiFlame />,
    "Incapaces" : <FaBookDead />,
  };
  const modeLogos = {
    "Pa' Todos": "Pa' Todos",
    "Rompe Amistades" : "Rompe Amistades",
    "Hidratacion" : "Hora de Hidratacion",
    "Hut" : "Hora Hut"
  }

  const currentModeIcon = modeIcons[mode];
  const currentModeLogo = modeLogos[mode];

  return (
    <div>
        <h1 className='gamemodeLogo'>{currentModeLogo}</h1>
      <div className='gamemodeIcon'>{currentModeIcon}</div>
    </div>
  );
}

export default GamemodeLogo;
