import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
    // Mock data for featured categories
    const featuredCategories = [
        { name: 'Building Materials', link: '/products?category=building-materials' },
        { name: 'Hardware', link: '/products?category=hardware' },
        { name: 'Fencing', link: '/products?category=fencing' },
        { name: 'Gardening', link: '/products?category=gardening' },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[50vh] text-white" style={{ backgroundImage: "url('https://www.haskins.co.bw/images/slides/fencing-banner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Quality Products, Trusted Service</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">Your one-stop shop for building materials, hardware, and more in Botswana.</p>
                    <Link to="/products" className="mt-8">
                        <Button variant="primary">Explore Our Products</Button>
                    </Link>
                </div>
            </section>

            {/* Featured Categories Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Product Categories</h2>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredCategories.map((category) => (
                            <Link to={category.link} key={category.name} className="block group">
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                    <h3 className="text-xl font-semibold text-gray-700">{category.name}</h3>
                                    <p className="mt-4 text-blue-500 group-hover:underline">Shop Now &rarr;</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Snippet */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Since 1897</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        J. Haskins & Sons has been a cornerstone of Botswana's development, providing quality goods and services for over a century. We are committed to building a better future with our communities.
                    </p>
                    <Link to="/about" className="mt-6 inline-block">
                        <Button variant="secondary">Learn More About Us</Button>
                    </Link>
                </div>
            </section>

            {/* Our Stores Highlight */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Visit Our Stores</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Find a Haskins store near you. We have branches across Botswana, ready to serve you.
                    </p>
                    <Link to="/stores" className="mt-6 inline-block">
                        <Button variant="secondary">Find a Store</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
