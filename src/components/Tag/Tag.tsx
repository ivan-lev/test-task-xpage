import './Tag.scss';

import type { Tag } from '../../types/tags';

export default function Tag({ tag }: { tag: Tag }): JSX.Element {
  return (
    <a key={tag.title} className={`tag tag_${tag.type}`}>
      {tag.title}
    </a>
  );
}
