import './SectionPlay.scss';

export default function SectionPlay(): JSX.Element {
  return (
    <section className="section section_titled play">
      <div className="section-heading">
        <h2 className="title">Играй</h2>
        <a href="#" className="link link_orange">
          в раздел
        </a>
      </div>

      <div className="play__cards">
        <div className="border-rounded play__card">
          <img
            className="play__card-img"
            src="/public/images/card-image-1.jpg"
            alt="Превью карточки"
          />
          <div className="play__card-text">
            <h3 className="title3">Найди себе команду</h3>
            <span className="play__card-description">
              Игры на районе - это возможность найти с кем поиграть в баскетбол в выходные, или
              создать свою игру и пригласить других игроков присоединиться.
            </span>
          </div>
          <a href="#" className="border-rounded button button_active play__card-button">
            Текст кнопки
          </a>
        </div>

        <div className="border-rounded play__card">
          <img
            className="play__card-img play__card-img_unbordered"
            src="/public/images/card-image-2.jpg"
            alt="Превью карточки"
          />
          <div className="play__card-text">
            <h3 className="title3">Создавай команды</h3>
            <span className="play__card-description">
              Игры на районе - это возможность найти с кем поиграть в баскетбол в выходные, или
              создать свою игру и пригласить других игроков присоединиться.
            </span>
          </div>
          <a href="#" className="border-rounded button button_active play__card-button">
            Текст кнопки
          </a>
        </div>

        <div className="border-rounded play__card">
          <img
            className="play__card-img"
            src="/public/images/card-image-3.jpg"
            alt="Превью карточки"
          />
          <div className="play__card-text">
            <h3 className="title3">Участвуй в турнирах</h3>
            <span className="play__card-description">
              Участвуйте в турнирах вместе с вашей командой. Будьте активными, побеждайте и
              получайте ачивки и призы от наших спонсоров.
            </span>
          </div>
          <a href="#" className="border-rounded button button_active  play__card-button">
            Текст кнопки
          </a>
        </div>
      </div>
    </section>
  );
}
