import './Main.scss';

import { useState } from 'react';

export default function Main() {
  const titles = [
    'Найди с кем поиграть в баскет',
    'Играй в баскет',
    'Учись играть в баскет',
    'Смотри, как играют в баскет'
  ];

  const [activeNumber, setActiveNumber] = useState(0);

  return (
    <main className="content">
      <section className={`border-rounded section content__hero content__hero_${activeNumber}`}>
        <h2 className="content__hero-title">{titles[activeNumber]}</h2>

        <div className="content__hero-buttons">
          <a
            href="#"
            className={`border-rounded content__hero-button ${
              activeNumber === 1 ? 'content__hero-button_active' : ''
            }`}
            onMouseEnter={() => setActiveNumber(1)}
          >
            Играй
          </a>
          <a
            href="#"
            className={`border-rounded content__hero-button ${
              activeNumber === 2 ? 'content__hero-button_active' : ''
            }`}
            onMouseEnter={() => setActiveNumber(2)}
          >
            Учись
          </a>
          <a
            href="#"
            className={`border-rounded content__hero-button ${
              activeNumber === 3 ? 'content__hero-button_active' : ''
            }`}
            onMouseEnter={() => setActiveNumber(3)}
          >
            Смотри
          </a>
        </div>
      </section>
      <section className="content__play"></section>
      <section className="content__learn"></section>
    </main>
  );
}
