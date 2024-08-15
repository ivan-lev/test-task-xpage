import './Main.scss';

import Hero from '../Hero/Hero';
import LearnSection from '../LearnSection/LearnSection';

export default function Main() {
  return (
    <main className="content">
      <Hero />

      <section className="section section_titled content__play">
        <div className="section-heading">
          <h2 className="title">Играй</h2>
          <a href="#" className="link link_orange">
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

      <LearnSection />
    </main>
  );
}
