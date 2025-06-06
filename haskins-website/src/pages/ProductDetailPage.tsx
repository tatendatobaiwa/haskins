import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import type { Product } from '../services/productService';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import NotFoundPage from './NotFoundPage';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setIsLoading(false);
            setError('Product ID is missing.');
            return;
        }

        const fetchProduct = async () => {
            try {
                setIsLoading(true);
                const fetchedProduct = await getProductById(id);
                setProduct(fetchedProduct);
            } catch (err) {
                setError('Failed to load product details.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (isLoading) {
        return <div className="py-12"><LoadingSpinner /></div>;
    }

    if (error) {
        return <div className="p-8"><ErrorMessage message={error} /></div>;
    }

    if (!product) {
        return <NotFoundPage />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image */}
                <div>
                    <img src={product.imageUrl || 'https://via.placeholder.com/600x600'} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-2xl text-gray-900 font-bold mt-4">${product.price.toFixed(2)}</p>
                    <p className="mt-4 text-gray-600">{product.description}</p>

                    {/* Specifications */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-800">Specifications</h2>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <li key={key} className="flex justify-between">
                                    <span className="font-semibold capitalize">{key.replace(/_/g, ' ')}:</span>
                                    <span>{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
