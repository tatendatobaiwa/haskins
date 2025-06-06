import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import haskinsLogo from '../../assets/haskinslogo.webp';
import NavDropdown from './NavDropdown';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownToggle = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.nav-dropdown')) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
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
        <nav className="masthead-nav">
            <div className="masthead-nav__main">
                <div className="masthead-nav__holder">
                    <div className="masthead-nav__logo-side">
                        <Link to="/" className="logo">
                            <img src={haskinsLogo} alt="Haskins Logo" />
                        </Link>
                    </div>

                    <ul className="masthead-nav__primary">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="has-mega-nav">
                            <NavDropdown
                                title="Products"
                                items={productsItems}
                                isOpen={activeDropdown === 'products'}
                                onToggle={() => handleDropdownToggle('products')}
                            />
                        </li>
                        <li className="has-mega-nav">
                            <NavDropdown
                                title="Services"
                                items={servicesItems}
                                isOpen={activeDropdown === 'services'}
                                onToggle={() => handleDropdownToggle('services')}
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
                            <button aria-label="Search">
                                <i className="fas fa-search"></i>
                            </button>
                        </li>
                        <li>
                            <button aria-label="Account">
                                <i className="fas fa-user"></i>
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
    );
};

export default Navbar; 