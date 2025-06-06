import React from 'react';
import type { Product } from '../../../services/productService';
import ProductCard from './ProductCard';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';

interface ProductListProps {
    products: Product[];
    isLoading: boolean;
    error: string | null;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading, error }) => {
    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (products.length === 0) {
        return <p className="text-center text-gray-500">No products found.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
