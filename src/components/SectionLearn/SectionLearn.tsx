import './SectionLearn.scss';

import Tags from '../Tags/Tags';
import ArticleSecondary from '../ArticleSecondary/ArticleSecondary';

import * as tags from '../../variables/articleTags';
import { secondaryArticlesData } from '../../variables/articlesData';

export default function SectionLearn(): JSX.Element {
  return (
    <section className="section section_titled border-rounded learn">
      <div className="section-heading">
        <h2 className="title">Учись</h2>
        <a href="#" className="hover-600 link link_green">
          в раздел
        </a>
      </div>
      <div className="learn__content">
        <div className="learn__block learn__block_primary">
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

        <div className="learn__block learn__block_secondary">
          {secondaryArticlesData.map((article, index) => (
            <ArticleSecondary key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
