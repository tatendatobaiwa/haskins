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
        <footer className="bg-gray-800 text-white mt-12">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold">J. Haskins & Sons</h3>
                        <p className="mt-2 text-gray-400">
                            Your trusted partner for quality building materials, hardware, and more since 1897.
                        </p>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h3 className="text-lg font-semibold">Sitemap</h3>
                        <ul className="mt-4 space-y-2">
                            {sitemapLinks.map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-gray-400 hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="mt-4 flex space-x-4">
                            {socialLinks.map(social => (
                                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} J. Haskins & Sons. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
