import React, { useEffect, useState } from 'react';
import Logo from "./components/logo/Logo.jsx";
import './App.css';
import { Link } from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { GiFlame } from "react-icons/gi";
import { FaBookDead } from "react-icons/fa";
import { IoIosBeer } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
        <div className="App">
          <div className='socialMedia'>
            <a href='https://www.instagram.com/brainner_br/'><RiInstagramFill className='instagram'/></a>
          </div>
          <Logo/>
          <div className="gamemodes">
            <div className='gamemodesCardsContainer'>

              <div className='gamemodesCards' style={{background:'#1F2544'}}>
                <Link to='/paTodos' className='link'>        
                <div className="cardContent">
                  <div className="textContainer" style={{color: '#CDE8E5'}}>
                    <h2>pa' todos</h2>
                    <p>Juegos clasicos para beber con Amigos</p>
                  </div>
                  <div className="iconContainer" style={{color: '#03AED2'}}>
                  <FaPeopleGroup />
                  </div>
                </div>
                </Link>
              </div>

              <div className='gamemodesCards' style={{background:'#1F2544'}}>
                <Link to="/rompeAmistades" className='link'>        
                <div className="cardContent">
                  <div className="textContainer" style={{color: '#CDE8E5'}}>
                    <h2>Rompe Amistades</h2>
                    <p>Que tan buenos amigos creen que son?</p>
                  </div>
                  <div className="iconContainer" style={{color: '#6C0345'}}>
                  <BsFillHeartbreakFill />
                  </div>
                </div>
                </Link>
              </div>

              <div className='gamemodesCards' style={{background:'#1F2544'}}>
                <Link to='/hidratacion' className='link'>                
                <div className="cardContent">
                  <div className="textContainer" style={{color: '#CDE8E5'}}>
                    <h2>Hora de hidratacion</h2>
                    <p>Quien aguanta mas?</p>
                  </div>
                  <div className="iconContainer" style={{color: '#F3CA52'}}>
                  <IoIosBeer />
                  </div>
                </div>
                </Link>
              </div>

              <div className='gamemodesCards' style={{background:'#1F2544'}}>
                <Link to='/hut' className='link'>
                <div className="cardContent">
                  <div className="textContainer" style={{color: '#CDE8E5'}}>
                    <h2>Hora Hut</h2>
                    <p>Lo que queda en Happy Hour, se queda en Happy Hour</p>
                  </div>
                  <div className="iconContainer" style={{color: '#C40C0C'}}>
                    <GiFlame />
                  </div>
                </div>
                </Link>
              </div>

              {/* <div className='gamemodesCards' style={{background:'#1F2544'}}>
                <div className="cardContent">
                  <div className="textContainer" style={{color: '#CDE8E5'}}>
                    <h2>Hora de Incapaces</h2>
                    <p>Pequeña descripción del modo</p>
                  </div>
                  <div className="iconContainer" style={{color: '#874CCC'}}>
                  <FaBookDead />
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
    </>
  );
}

export default App;
