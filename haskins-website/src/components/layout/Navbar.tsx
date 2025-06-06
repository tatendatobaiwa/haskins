import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import '../../styles/navbar.css';
import haskinsLogo from '../../assets/haskinslogo.webp';
import NavDropdown from './NavDropdown';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', searchQuery);
    };

    useEffect(() => {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

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
            title: 'Attachments',
            url: '/products/attachments',
            description: 'Specialized attachments for various applications'
        },
        {
            title: 'Electric',
            url: '/products/electric',
            description: 'Electric-powered equipment and solutions'
        },
        {
            title: 'Government & Defense',
            url: '/products/government-defense',
            description: 'Specialized equipment for government and defense'
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

                        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
                            <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
                        </button>

                        <ul className={`masthead-nav__primary ${isMenuOpen ? 'active' : ''}`}>
                            <li>
                                <Link to="/">Home</Link>
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
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/stores">Stores</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <ul className="masthead-nav__secondary">
                            <li className="search">
                                <button onClick={toggleSearch} aria-label="Search">
                                    <FaSearch />
                                </button>
                            </li>
                            <li>
                                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                                </button>
                            </li>
                            <li>
                                <button aria-label="Account">
                                    <FaUser />
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

            <div className={`search-panel ${isSearchOpen ? 'active' : ''}`}>
                <div className="search-panel__container">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-panel__input"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-panel__button">
                            Search
                        </button>
                    </form>
                    <button className="search-panel__close" onClick={toggleSearch} aria-label="Close search">
                        <FaTimes />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar; 