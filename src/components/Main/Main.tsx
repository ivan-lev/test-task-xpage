import './Main.scss';

export default function Main() {
  return (
    <main className="content">
      <section className="border-rounded section content__hero">
        <h2 className="content__hero-title"></h2>
        <div className="content__hero-buttons">
          <button className="border-rounded content__hero-button">Играй</button>
          <button className="border-rounded content__hero-button">Учись</button>
          <button className="border-rounded content__hero-button">Смотри</button>
        </div>
      </section>
      <section className="content__play"></section>
      <section className="content__learn"></section>
    </main>
  );
}
