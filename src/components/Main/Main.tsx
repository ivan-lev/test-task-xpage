import './Main.scss';

import SectionHero from '../SectionHero/SectionHero';
import SectionPlay from '../SectionPlay/SectionPlay';
import SectionLearn from '../SectionLearn/SectionLearn';

export default function Main() {
  return (
    <main className="content">
      <SectionHero />
      <SectionPlay />
      <SectionLearn />
    </main>
  );
}
