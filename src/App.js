import React from 'react';
import Logo from "./components/logo/Logo.jsx";
import './app.css';
import { Link } from 'react-router-dom';
import { GiCardRandom } from "react-icons/gi";
import { PiBeerBottleFill } from "react-icons/pi";
import { TbHandOff } from "react-icons/tb";
import Navbar from './components/navbar/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Logo/>
      <div className="gamemodes">
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

export default App;
