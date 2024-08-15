import './LearnSection.scss';

import Tags from '../Tags/Tags';

import * as tags from '../../variables/articleTags';

export default function LearnSection(): JSX.Element {
  return (
    <section className="section section_titled border-rounded learn">
      <div className="section-heading">
        <h2 className="title">Учись</h2>
        <a href="#" className="link link_green">
          в раздел
        </a>
      </div>
      <div className="learn__articles">
        <div className="learn__articles-block_primary">
          <div className="border-rounded learn__article-primary learn__article-primary_first">
            <h3 className="learn__article-title_primary">
              мы собрали секции для детей по всему городу
            </h3>
            <div className="learn__article-tags">
              <Tags tags={tags.primaryArticleTags} />
            </div>
          </div>

          <div className="border-rounded learn__article-primary learn__article-primary_second">
            <h3 className="learn__article-title_primary">Подбери тренера под свой уровень</h3>
            <div className="learn__article-tags">
              <Tags tags={tags.secondaryArticleTags} />
            </div>
          </div>
        </div>

        <div className="separator learn__articles-separator"></div>

        <div className="learn__articles-block_secondary">
          <div className="learn__article-secondary">
            <a className="learn__article-link link link_hover-green" href="#">
              <h4>Видеуроки</h4>
            </a>
            <div className="learn__article-secondary-content">
              <p>Евгений Воронов: «Бронзовые медали - оценка труда нашей команды»</p>
              <div>
                <Tags tags={tags.videoAtricleTags} />
              </div>
            </div>
          </div>

          <div className="learn__article-secondary">
            <a className="learn__article-link link link_hover-green" href="#">
              <h4>Статьи</h4>
            </a>
            <div className="learn__article-secondary-content">
              <p>Евгений Воронов: «Бронзовые медали - оценка труда нашей команды»</p>
              <div>
                <Tags tags={tags.miscAtricleTags} />
              </div>
            </div>
          </div>

          <div className="learn__article-secondary">
            <a className="learn__article-link link link_hover-green" href="#">
              <h4>Термины</h4>
            </a>
            <div className="learn__article-secondary-content">
              <p></p>
              <div>
                <Tags tags={tags.termsAtricleTags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
