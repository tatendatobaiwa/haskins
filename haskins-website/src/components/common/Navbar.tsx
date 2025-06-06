import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
                                J. Haskins & Sons
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Home
                            </Link>
                            <Link to="/products" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Products
                            </Link>
                            <Link to="/about" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                About
                            </Link>
                            <Link to="/stores" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Stores
                            </Link>
                            <Link to="/contact" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                        <ThemeToggle />
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                            Delivery Info
                        </button>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:text-gray-500"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                            Home
                        </Link>
                        <Link to="/products" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                            Products
                        </Link>
                        <Link to="/about" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                            About
                        </Link>
                        <Link to="/stores" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                            Stores
                        </Link>
                        <Link to="/contact" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                            Contact
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center px-4">
                            <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors w-full text-left">
                                Delivery Info
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
