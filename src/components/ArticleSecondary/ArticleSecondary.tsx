import './ArticleSecondary.scss';

import Tags from '../Tags/Tags';

import type { ArticleType } from '../../types/articleType';

export default function ArticleSecondary({ article }: { article: ArticleType }): JSX.Element {
  return (
    <div className="article-secondary">
      <a className="article-secondary__link link link_hover-green" href="#">
        <h4>{article.sectionTitle}</h4>
      </a>

      {article.articleThumbnail ? (
        <div className="article-secondary__content_with-thumbnail">
          <img
            className="article-secondary__content_with-thumbnail-img"
            src={article.articleThumbnail}
          ></img>
          <div className="article-secondary__content_with-thumbnail-wrapper">
            <a className="article-secondary__link" href="#">
              {article.articleTitle}
            </a>
            <div>
              <Tags tags={article.tags} />
            </div>
          </div>
        </div>
      ) : (
        <div className="article-secondary__content">
          <a className="article-secondary__link" href="#">
            {article.articleTitle}
          </a>
          <div>
            <Tags tags={article.tags} />
          </div>
        </div>
      )}
    </div>
  );
}
