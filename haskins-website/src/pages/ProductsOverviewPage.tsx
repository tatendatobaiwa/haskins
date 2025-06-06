import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts, Product } from '../services/productService';
import ProductList from '../components/features/products/ProductList';

const ProductsOverviewPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const fetchedProducts = await getProducts(category || undefined);
                setProducts(fetchedProducts);
            } catch (err) {
                setError('Failed to load products. Please try again later.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">
                {category ? `${category.replace('-', ' ')}` : 'All Products'}
            </h1>
            <ProductList products={products} isLoading={isLoading} error={error} />
        </div>
    );
};

export default ProductsOverviewPage;
