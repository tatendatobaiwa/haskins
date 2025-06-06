import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900">About J. Haskins & Sons</h1>
                    <p className="mt-4 text-lg text-gray-600">A legacy of quality and trust since 1897.</p>
                </div>

                <div className="mt-12 prose prose-lg text-gray-600 mx-auto">
                    {/* Company History Section */}
                    <h2>Our History</h2>
                    <p>
                        Founded in 1897 by John Daniel Haskins, J. Haskins & Sons has grown from a small trading post in Francistown to one of Botswana's leading suppliers of a diverse range of products. For over a century, we have been proudly intertwined with the nation's history, contributing to its growth and development every step of the way.
                    </p>

                    {/* Mission & Vision Section */}
                    <h2>Mission & Vision</h2>
                    <p>
                        <strong>Our Mission:</strong> To provide our customers with high-quality products and exceptional service, building lasting relationships based on reliability and integrity.
                    </p>
                    <p>
                        <strong>Our Vision:</strong> To be the preferred supplier for individuals and businesses in Botswana, continuing our legacy of contributing to the nation's prosperity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
