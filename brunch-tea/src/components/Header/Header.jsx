function Header() {
  return (
    <header className="header">
      <div className="header__logo">Brunch & Tea</div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link header__link--active" href="#hero">
              Home
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#menu">
              Menu
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#about">
              About
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#location">
              Schedules and Location
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#contact">
              Contact
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#"></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
