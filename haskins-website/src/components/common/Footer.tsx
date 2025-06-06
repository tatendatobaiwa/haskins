import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const sitemapLinks = [
        { to: "/", label: "Home" },
        { to: "/products", label: "Products" },
        { to: "/about", label: "About Us" },
        { to: "/stores", label: "Our Stores" },
        { to: "/contact", label: "Contact Us" },
    ];

    const socialLinks = [
        { href: "https://www.facebook.com/haskinsbotswana/", label: "Facebook" },
        // Add other social media links here
    ];

    return (
        <footer className="bg-gray-800 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">J. Haskins & Sons</h3>
                        <p className="text-gray-300 mb-4">Delivering quality building materials, hardware, and tools throughout Botswana for over 110 years.</p>
                        <div className="flex space-x-4">
                            {/* Placeholder for social media icons */}
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Store Locations</h3>
                        <ul className="space-y-3">
                            <li>
                                <strong>Gaborone</strong><br />
                                Tel: (+267) 3951001<br />
                                Fax: (+267) 3914916
                            </li>
                            <li>
                                <strong>Francistown</strong><br />
                                Tel: (+267) 2412301<br />
                                Fax: (+267) 2414298
                            </li>
                            <li>
                                <strong>Palapye</strong><br />
                                Tel: (+267) 4920300<br />
                                Fax: (+267) 4920721
                            </li>
                            <li>
                                <strong>Kasane</strong><br />
                                Tel: (+267) 6250124<br />
                                Fax: (+267) 6250528
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/specials" className="text-gray-300 hover:text-white transition-colors">Specials</Link></li>
                            <li><Link to="/credit-app" className="text-gray-300 hover:text-white transition-colors">Credit App Form</Link></li>
                            <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SA Bureau of Standards</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">DIY with Popular Mechanics</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Handyman Know How</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Construction Calculator</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} J. Haskins & Sons. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
