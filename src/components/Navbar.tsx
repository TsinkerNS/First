import React from 'react'

export const Navbar: React.FC = () => (
  <nav>
      <div className="nav-wrapper px">
      <a href="#" className="brand-logo">React</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Список дел</a></li>
        <li><a href="https://restcountries.eu/data/usa.svg">Информация</a></li>
        </ul>
    </div>
  </nav>
)