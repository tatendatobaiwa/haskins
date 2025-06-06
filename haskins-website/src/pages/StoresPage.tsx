import React, { useState, useEffect } from 'react';
import { getStoreLocations } from '../services/storeService';
import type { Store } from '../services/storeService';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import Card from '../components/common/Card';

const StoresPage: React.FC = () => {
    const [stores, setStores] = useState<Store[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                setIsLoading(true);
                const fetchedStores = await getStoreLocations();
                setStores(fetchedStores);
            } catch (err) {
                setError('Failed to load store locations.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStores();
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <LoadingSpinner />;
        }

        if (error) {
            return <ErrorMessage message={error} />;
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stores.map(store => (
                    <Card key={store.id} className="flex flex-col">
                        <div className="p-6 flex-grow">
                            <h2 className="text-2xl font-bold text-gray-800">{store.name}</h2>
                            <p className="mt-2 text-gray-600">{store.address}</p>
                            <p className="mt-1 text-gray-600"><strong>Phone:</strong> {store.phone}</p>
                            <p className="mt-1 text-gray-600"><strong>Hours:</strong> {store.openingHours}</p>
                        </div>
                        <div className="bg-gray-50 p-4 text-center">
                            {/* Placeholder for map link */}
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${store.coordinates.lat},${store.coordinates.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 font-semibold"
                            >
                                View on Map
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">Our Stores</h1>
                <p className="mt-4 text-lg text-gray-600">Find a J. Haskins & Sons branch near you.</p>
            </div>
            {renderContent()}
            
            {/* Optional: Embedded Map Placeholder */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Locations</h2>
                <div className="bg-gray-200 h-96 rounded-lg text-center flex items-center justify-center">
                    <p className="text-gray-500">Embedded map will be displayed here.</p>
                </div>
            </div>
        </div>
    );
};

export default StoresPage;
