import './Main.scss';

import { useState } from 'react';

export default function Main() {
  const alternativeTitles = [
    'Найди с кем поиграть в баскет',
    'Играй в баскет',
    'Учись играть в баскет',
    'Смотри, как играют в баскет'
  ];
  const [heroTitle, setHeroTitle] = useState(alternativeTitles[0]);

  const changeTitle = (titleNumber: number) => {
    setHeroTitle(alternativeTitles[titleNumber]);
  };

  return (
    <main className="content">
      <section className="border-rounded section content__hero">
        <h2 className="content__hero-title">{heroTitle}</h2>
        <div className="content__hero-buttons">
          <button
            className="border-rounded content__hero-button"
            onMouseEnter={() => changeTitle(1)}
            onMouseLeave={() => changeTitle(0)}
          >
            Играй
          </button>
          <button
            className="border-rounded content__hero-button"
            onMouseEnter={() => changeTitle(2)}
            onMouseLeave={() => changeTitle(0)}
          >
            Учись
          </button>
          <button
            className="border-rounded content__hero-button"
            onMouseEnter={() => changeTitle(3)}
            onMouseLeave={() => changeTitle(0)}
          >
            Смотри
          </button>
        </div>
      </section>
      <section className="content__play"></section>
      <section className="content__learn"></section>
    </main>
  );
}
