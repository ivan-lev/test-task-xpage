import './SectionPlay.scss';

import Card from '../Card/Card';

import { cardsArray } from '../../variables/cardsData';

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
        {cardsArray.map(card => (
          <Card card={card} />
        ))}
      </div>
    </section>
  );
}
