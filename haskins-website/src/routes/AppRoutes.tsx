import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsOverviewPage from '../pages/ProductsOverviewPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import StoresPage from '../pages/StoresPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="products" element={<ProductsOverviewPage />} />
                <Route path="products/:id" element={<ProductDetailPage />} />
                <Route path="stores" element={<StoresPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
