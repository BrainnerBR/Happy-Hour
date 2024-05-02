import React from 'react';
import Logo from "./components/logo/Logo.jsx";
import './App.css';
import { Link } from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { GiFlame } from "react-icons/gi";
import { FaBookDead } from "react-icons/fa";

import { IoIosBeer } from "react-icons/io";

import Navbar from './components/navbar/Navbar.jsx';


function App() {
  return (
    <div className="App">
  <Logo/>
  <div className="gamemodes">
    <div className='gamemodesCardsContainer'>
      <div className='gamemodesCards'>
        
        <Link to='/chillHome'>        
        <div className="cardContent">
          <div className="textContainer">
            <h2>pa' todos</h2>
            <p>Pequeña descripción del modo</p>
          </div>
          <div className="iconContainer">
          <FaPeopleGroup />
          </div>
        </div>
        </Link>
      </div>
      <div className='gamemodesCards'>
        <div className="cardContent">
          <div className="textContainer">
            <h2>Rompe Amistades</h2>
            <p>Pequeña descripción del modo</p>
          </div>
          <div className="iconContainer">
          <BsFillHeartbreakFill />
          </div>
        </div>
      </div>
      <div className='gamemodesCards'>
        <div className="cardContent">
          <div className="textContainer">
            <h2>Hora de hidratacion</h2>
            <p>Pequeña descripción del modo</p>
          </div>
          <div className="iconContainer">
          <IoIosBeer />

          </div>
        </div>
      </div>
      <div className='gamemodesCards'>
        <div className="cardContent">
          <div className="textContainer">
            <h2>Hora Hut</h2>
            <p>Pequeña descripción del modo</p>
          </div>
          <div className="iconContainer">
            <GiFlame />
          </div>
        </div>
      </div>
      <div className='gamemodesCards'>
        <div className="cardContent">
          <div className="textContainer">
            <h2>Hora de Incapaces</h2>
            <p>Pequeña descripción del modo</p>
          </div>
          <div className="iconContainer">
          <FaBookDead />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
