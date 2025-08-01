import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../../services/productService';
import Card from '../../common/Card';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card>
            <Link to={`/products/${product.id}`}>
                <img className="w-full h-48 object-cover" src={product.imageUrl || 'https://via.placeholder.com/400x300'} alt={product.name} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-100">{product.name}</h3>
                    <p className="text-gray-300 mt-2">${product.price.toFixed(2)}</p>
                    <div className="text-right mt-4">
                        <span className="text-primary-400 hover:text-primary-300 font-semibold">
                            View Details
                        </span>
                    </div>
                </div>
            </Link>
        </Card>
    );
};

export default ProductCard;
