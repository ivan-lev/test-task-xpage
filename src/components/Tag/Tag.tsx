import './Tag.scss';

import type { Tag } from '../../types/tag';

export default function Tag({ tag }: { tag: Tag }): JSX.Element {
  return (
    <span key={tag.title} className={`tag tag_${tag.type}`}>
      {tag.title}
    </span>
  );
}
