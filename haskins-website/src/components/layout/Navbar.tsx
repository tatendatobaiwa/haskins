import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import '../../styles/navbar.css';
import haskinsLogo from '../../assets/haskinslogo.webp';
import NavDropdown from './NavDropdown';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const productsItems = [
        {
            title: 'Construction',
            url: '/products/construction',
            description: 'Heavy equipment and machinery for construction projects'
        },
        {
            title: 'Agriculture',
            url: '/products/agriculture',
            description: 'Farming and agricultural equipment solutions'
        },
        {
            title: 'Tools and Hardware',
            url: '/products/tools-hardware',
            description: 'A wide range of tools and hardware for any job.'
        },
        {
            title: 'Electric',
            url: '/products/electric',
            description: 'Electric-powered equipment and solutions'
        },
        {
            title: 'Plumbing',
            url: '/products/plumbing',
            description: 'Pipes, fittings, and fixtures for all your plumbing needs.'
        }
    ];

    const servicesItems = [
        {
            title: 'Parts',
            url: '/services/parts',
            description: 'Genuine parts and components'
        },
        {
            title: 'Service',
            url: '/services/service',
            description: 'Professional maintenance and repair services'
        },
        {
            title: 'LiveLink',
            url: '/services/livelink',
            description: 'Remote monitoring and fleet management'
        },
        {
            title: 'Other Services',
            url: '/services/other',
            description: 'Additional support and services'
        }
    ];

    return (
        <>
            <nav className="masthead-nav">
                <div className="masthead-nav__main">
                    <div className="masthead-nav__holder">
                        <div className="masthead-nav__logo-side">
                            <Link to="/" className="logo">
                                <img src={haskinsLogo} alt="Haskins Logo" />
                            </Link>
                        </div>

                        <ul className="masthead-nav__primary">
                            <li className="search">
                                <button onClick={toggleSearch} aria-label="Search">
                                    <FaSearch />
                                </button>
                            </li>
                            <li className="has-mega-nav">
                                <NavDropdown
                                    title="Products"
                                    items={productsItems}
                                />
                            </li>
                            <li className="has-mega-nav">
                                <NavDropdown
                                    title="Services"
                                    items={servicesItems}
                                />
                            </li>
                            <li>
                                <Link to="/stores">Stores</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                        </ul>
                        <ul className="masthead-nav__secondary">
                            <li className="mobile-menu-toggle">
                                <button onClick={toggleMenu} aria-label="Toggle mobile menu">
                                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="masthead-nav__tertiary">
                    <ul>
                        <li>
                            <Link to="/support">Support</Link>
                        </li>
                        <li>
                            <Link to="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link to="/news">News</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="mobile-menu-overlay">
                    <ul className="mobile-menu-overlay__primary">
                        <li className="has-mega-nav">
                            <NavDropdown
                                title="Products"
                                items={productsItems}
                            />
                        </li>
                        <li className="has-mega-nav">
                            <NavDropdown
                                title="Services"
                                items={servicesItems}
                            />
                        </li>
                        <li>
                            <Link to="/stores" onClick={toggleMenu}>Stores</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleMenu}>About Us</Link>
                        </li>
                    </ul>
                    <ul className="mobile-menu-overlay__tertiary">
                        <li>
                            <Link to="/support" onClick={toggleMenu}>Support</Link>
                        </li>
                        <li>
                            <Link to="/careers" onClick={toggleMenu}>Careers</Link>
                        </li>
                        <li>
                            <Link to="/news" onClick={toggleMenu}>News</Link>
                        </li>
                    </ul>
                </div>
            )}

            <div className={`search-panel ${isSearchOpen ? 'active' : ''}`}>
                <div className="search-panel__container">
                    <form onSubmit={handleSearch} className="search-panel__form">
                        <input
                            type="text"
                            className="search-panel__input"
                            placeholder="What are you searching for?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="search-panel__actions">
                            <button type="submit" className="search-panel__button">
                                Search
                            </button>
                            <button type="button" className="search-panel__close" onClick={toggleSearch} aria-label="Close search">
                                <FaTimes />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Navbar;
