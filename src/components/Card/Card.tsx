import './Card.scss';

import { CardType } from '../../types/cardType';

export default function Card({ card }: { card: CardType }): JSX.Element {
  return (
    <div className="border-rounded card">
      <img
        className={`card__img ${!card.isImageRounded ? 'card__img_unbordered' : ''}`}
        src={card.image}
        alt="Превью карточки"
      />
      <div className="card__text">
        <h3 className="title3">{card.title}</h3>
        <span className="card__description">{card.text}</span>
      </div>
      <a href="#" className="border-rounded button button_active card__button">
        {card.buttonText}
      </a>
    </div>
  );
}
