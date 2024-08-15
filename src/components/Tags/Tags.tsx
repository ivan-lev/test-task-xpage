import './Tags.scss';

import Tag from '../Tag/Tag';

import type { TagType } from '../../types/tag';

export default function Tags({ tags }: { tags: TagType[] }): JSX.Element {
  return (
    <div className="tags">
      {tags.map(tag => (
        <Tag key={tag.title} tag={tag} />
      ))}
    </div>
  );
}
