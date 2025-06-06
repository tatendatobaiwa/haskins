import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="mt-8">
                <Button variant="primary">Go to Homepage</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
