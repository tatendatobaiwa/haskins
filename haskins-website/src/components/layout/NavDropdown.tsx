import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  title: string;
  url: string;
  description: string;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`nav-dropdown ${isOpen ? 'open' : ''}`}>
      <button
        className="nav-dropdown__button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div className="nav-dropdown__menu">
        <div className="nav-dropdown__header">
          <h3 className="nav-dropdown__title">{title}</h3>
        </div>
        <ul className="nav-dropdown__list">
          {items.map((item, index) => (
            <li key={index} className="nav-dropdown__item">
              <Link to={item.url} className="nav-dropdown__link">
                <h4 className="nav-dropdown__title">{item.title}</h4>
                <p className="nav-dropdown__description">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDropdown; 