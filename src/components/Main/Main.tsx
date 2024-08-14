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
      <section className={`content__hero content__hero_${activeNumber} border-rounded section`}>
        <h2 className="title content__hero-title">{titles[activeNumber]}</h2>

        <div className="content__hero-buttons">
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

      <section className="section section_titled content__play">
        <div className="section-heading">
          <h2 className="title">играй</h2>
          <a href="#" className="link link_orange content__play-link">
            в раздел
          </a>
        </div>

        <div className="content__play-cards">
          <div className="border-rounded content__play-card">
            <img
              className="content__play-card-img"
              src="../../../public/images/card-image-1.jpg"
              alt="Превью карточки"
            />
            <div className="content__play-card-text">
              <h3 className="title3">Найди себе команду</h3>
              <span className="content__play-card-description">
                Игры на районе - это возможность найти с кем поиграть в баскетбол в выходные, или
                создать свою игру и пригласить других игроков присоединиться.
              </span>
            </div>
            <a href="#" className="border-rounded button button_active content__play-card-button">
              Текст кнопки
            </a>
          </div>

          <div className="border-rounded content__play-card">
            <img
              className="content__play-card-img content__play-card-img_unbordered"
              src="../../../public/images/card-image-2.jpg"
              alt="Превью карточки"
            />
            <div className="content__play-card-text">
              <h3 className="title3">Создавай команды</h3>
              <span className="content__play-card-description">
                Игры на районе - это возможность найти с кем поиграть в баскетбол в выходные, или
                создать свою игру и пригласить других игроков присоединиться.
              </span>
            </div>
            <a href="#" className="border-rounded button button_active content__play-card-button">
              Текст кнопки
            </a>
          </div>

          <div className="border-rounded content__play-card">
            <img
              className="content__play-card-img"
              src="../../../public/images/card-image-3.jpg"
              alt="Превью карточки"
            />
            <div className="content__play-card-text">
              <h3 className="title3">Участвуй в турнирах</h3>
              <span className="content__play-card-description">
                Участвуйте в турнирах вместе с вашей командой. Будьте активными, побеждайте и
                получайте ачивки и призы от наших спонсоров.
              </span>
            </div>
            <a href="#" className="border-rounded button button_active  content__play-card-button">
              Текст кнопки
            </a>
          </div>
        </div>
      </section>
      <section className="content__learn"></section>
    </main>
  );
}
