import './Logo.scss';

export default function Logo(): JSX.Element {
  return (
    <a href="#">
      <img src="../../../public/logo.svg" alt="Логотип" className="hover-600 logo" />
    </a>
  );
}
