import React from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  title: string;
  url: string;
  description: string;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="nav-dropdown">
      <button
        className="nav-dropdown__button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
      </button>
      <div className={`nav-dropdown__menu ${isOpen ? 'active' : ''}`}>
        <div className="nav-dropdown__header">
          <h3 className="nav-dropdown__title">{title}</h3>
          <button
            className="nav-dropdown__close"
            onClick={onToggle}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
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