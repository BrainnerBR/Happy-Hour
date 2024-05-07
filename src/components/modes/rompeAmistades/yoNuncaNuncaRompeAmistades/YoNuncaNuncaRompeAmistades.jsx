import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { yoNuncaNuncaRompeAmistadesData } from './YoNuncaNuncaRompeAmistadesCards';
import { GiCardExchange } from "react-icons/gi";

const YoNuncaNuncaRompeAmistades = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [usedCardIndexes, setUsedCardIndexes] = useState([]);

  const getRandomIndex = () => {
    const remainingIndexes = yoNuncaNuncaRompeAmistadesData
      .map((_, index) => index)
      .filter(index => !usedCardIndexes.includes(index));
    const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
    return remainingIndexes[randomIndex];
  };

  const handleNextCard = () => {
    if (usedCardIndexes.length === yoNuncaNuncaRompeAmistadesData.length) {
      // Si no hay más tarjetas disponibles, no hacer nada
      return;
    }

    const randomIndex = getRandomIndex();
    setUsedCardIndexes([...usedCardIndexes, randomIndex]);
    setCurrentCardIndex(randomIndex);
  };

  const currentCard = yoNuncaNuncaRompeAmistadesData[currentCardIndex];

  return (
    <div className='rompeAmistadesHome'>
      <Link to='/rompeAmistades'>
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

export default YoNuncaNuncaRompeAmistades;
