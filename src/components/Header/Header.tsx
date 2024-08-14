import './Header.scss';

import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="border-rounded header">
      <Logo />
      <nav className="header__nav-links">
        <ul className="header__nav-links-list">
          <li className="header__nav-link-element">
            <a href="#" className="header__nav-link">
              Играть
            </a>
          </li>
          <li className="header__nav-link-element">
            <a href="#" className="header__nav-link">
              Смотерть
            </a>
          </li>
          <li className="header__nav-link-element">
            <a href="#" className="header__nav-link">
              Учиться
            </a>
          </li>
          <li className="header__nav-link-element">
            <a href="#" className="header__nav-link">
              Мероприятия
            </a>
          </li>
        </ul>
      </nav>
      <button className="header__menu">
        <span className="header__menu-text">Меню</span>
      </button>
      <div className="header__user-info">
        <span className="header__user-name">геннадий П.</span>
        <img className="header__user-photo" src="/images/user-photo.jpg" alt="Фото пользователя" />
      </div>
    </header>
  );
}
