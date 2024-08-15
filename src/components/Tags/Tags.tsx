import './Tags.scss';

import Tag from '../Tag/Tag';

import type { TagsArray } from '../../types/tags';

export default function Tags({ tags }: { tags: TagsArray }): JSX.Element {
  return (
    <div className="tags">
      {tags.map(tag => (
        <Tag key={tag.title} tag={tag} />
      ))}
    </div>
  );
}
