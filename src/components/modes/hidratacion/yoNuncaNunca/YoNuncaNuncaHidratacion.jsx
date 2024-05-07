import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { YoNuncaNuncaHidratacionData } from './YoNuncaNuncaHidratacionData';
import { GiCardExchange } from "react-icons/gi";

const YoNuncaNuncaHidratacion = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [usedCardIndexes, setUsedCardIndexes] = useState([]);

  const getRandomIndex = () => {
    const remainingIndexes = YoNuncaNuncaHidratacionData
      .map((_, index) => index)
      .filter(index => !usedCardIndexes.includes(index));
    const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
    return remainingIndexes[randomIndex];
  };

  const handleNextCard = () => {
    if (usedCardIndexes.length === YoNuncaNuncaHidratacionData.length) {
      // Si no hay más tarjetas disponibles, no hacer nada
      return;
    }

    const randomIndex = getRandomIndex();
    setUsedCardIndexes([...usedCardIndexes, randomIndex]);
    setCurrentCardIndex(randomIndex);
  };

  const currentCard = YoNuncaNuncaHidratacionData[currentCardIndex];

  return (
    <div className='hidratacionHome'>
      <Link to='/hidratacion'>
        <MdKeyboardBackspace />
      </Link>
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

export default YoNuncaNuncaHidratacion;
