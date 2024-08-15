import './Hero.scss';

import { useState } from 'react';

import { heroData } from '../../variables/heroData';

export default function Hero(): JSX.Element {
  const [activeNumber, setActiveNumber] = useState(0);
  return (
    <section
      className={`hero hero_${activeNumber} border-rounded section`}
      style={{
        backgroundImage: `url("${heroData[activeNumber].backgroundImage}")`
      }}
    >
      <h2 className="title hero__title">{heroData[activeNumber].title}</h2>

      <div className="hero__buttons">
        <a
          href="#"
          className={`border-rounded button ${activeNumber === 1 ? 'button_active' : ''}`}
          onMouseEnter={() => setActiveNumber(1)}
        >
          Играй
        </a>
        <a
          href="#"
          className={`border-rounded button ${activeNumber === 2 ? 'button_active' : ''}`}
          onMouseEnter={() => setActiveNumber(2)}
        >
          Учись
        </a>
        <a
          href="#"
          className={`border-rounded button ${activeNumber === 3 ? 'button_active' : ''}`}
          onMouseEnter={() => setActiveNumber(3)}
        >
          Смотри
        </a>
      </div>
    </section>
  );
}
