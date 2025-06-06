import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import '../styles/home.css';

const HomePage: React.FC = () => {
    // Mock data for featured categories
    const featuredCategories = [
        { 
            name: 'Building Materials', 
            link: '/products?category=building-materials',
            description: 'Quality construction materials for your projects'
        },
        { 
            name: 'Hardware', 
            link: '/products?category=hardware',
            description: 'Essential tools and hardware supplies'
        },
        { 
            name: 'Fencing', 
            link: '/products?category=fencing',
            description: 'Durable fencing solutions for any property'
        },
        { 
            name: 'Gardening', 
            link: '/products?category=gardening',
            description: 'Everything you need for your garden'
        },
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: "url('https://www.haskins.co.bw/images/slides/hero-banner.jpg')" }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Building Botswana's Future</h1>
                    <p className="hero-subtitle">Your trusted partner in construction, hardware, and agricultural supplies since 1897</p>
                    <Link to="/products">
                        <Button variant="primary">Explore Our Products</Button>
                    </Link>
                </div>
            </section>

            {/* Featured Categories Section */}
            <section className="categories-section">
                <div className="section-container">
                    <h2 className="section-title">Our Product Categories</h2>
                    <div className="categories-grid">
                        {featuredCategories.map((category) => (
                            <Link to={category.link} key={category.name} className="category-card">
                                <h3 className="category-title">{category.name}</h3>
                                <p className="category-description">{category.description}</p>
                                <span className="category-link">Shop Now &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Snippet */}
            <section className="about-section">
                <div className="section-container">
                    <div className="about-content">
                        <h2 className="section-title">Our Legacy</h2>
                        <p className="about-text">
                            For over a century, J. Haskins & Sons has been at the forefront of Botswana's development, 
                            providing quality goods and services to build a better future. Our commitment to excellence 
                            and customer satisfaction has made us the trusted name in construction and agricultural supplies.
                        </p>
                        <Link to="/about">
                            <Button variant="secondary">Discover Our Story</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Stores Highlight */}
            <section className="stores-section">
                <div className="section-container">
                    <div className="about-content">
                        <h2 className="section-title">Visit Our Stores</h2>
                        <p className="about-text">
                            With branches across Botswana, we're always close by to serve you. 
                            Find your nearest Haskins store and experience our commitment to quality and service.
                        </p>
                        <Link to="/stores">
                            <Button variant="secondary">Find a Store</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
