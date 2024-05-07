import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { MinutoHidratacionData } from './minutoHidratacionData';
import { GiCardExchange } from "react-icons/gi";
import './countdown'

const MinutoHidratacion = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [usedCardIndexes, setUsedCardIndexes] = useState([]);

  useEffect(() => {
    const timerElement = document.getElementById('timer');
    let totalTime = 60;

    function updateTimer() {
      const minutes = Math.floor(totalTime / 60);
      let seconds = totalTime % 60;
      if (seconds < 10) {
          seconds = '0' + seconds;
      }
      timerElement.textContent = minutes + ':' + seconds;
      totalTime--;

      if (totalTime < 0) {
          clearInterval(timerInterval);
          timerElement.textContent = '0:00';
      }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
      clearInterval(timerInterval);
    };
  }, []);

  const getRandomIndex = () => {
    const remainingIndexes = MinutoHidratacionData
      .map((_, index) => index)
      .filter(index => !usedCardIndexes.includes(index));
    const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
    return remainingIndexes[randomIndex];
  };

  const handleNextCard = () => {
    if (usedCardIndexes.length === MinutoHidratacionData.length) {
      // Si no hay más tarjetas disponibles, no hacer nada
      return;
    }

    const randomIndex = getRandomIndex();
    setUsedCardIndexes([...usedCardIndexes, randomIndex]);
    setCurrentCardIndex(randomIndex);
  };

  const currentCard = MinutoHidratacionData[currentCardIndex];

  return (
    <div className='hidratacionHome'>
            <div className='minutoHidratacionTopBar'>
        <Link to='/hidratacion'>
            <MdKeyboardBackspace />
        </Link>
           <div className='countdown' id="timer">1:00</div>
        </div>
      <div className='classicCardsContainer'>
        {currentCard ? (
          <div className='classicCard'>
            <div className='classicIcon'>{currentCard.icon}</div>
            <h3 className='title'>{currentCard.title}</h3>
            <h2 className='cardSentence'>{currentCard.description}</h2>
          </div>
        ) : (
          <div>No hay más tarjetas disponibles.</div>
        )}
      </div>

      <div className='nextBtnContainer'>
        <a onClick={handleNextCard}><GiCardExchange/></a>
      </div>
    </div>
  );
};

export default MinutoHidratacion;
