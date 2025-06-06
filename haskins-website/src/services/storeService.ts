import { db } from './firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';

// Define the Store interface
export interface Store {
    id: string;
    name: string;
    address: string;
    phone: string;
    openingHours: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

// Re-export the Store interface as a type
export type { Store };

const storesCollection = collection(db, 'stores');

/**
 * Fetches all store locations.
 * @returns A promise that resolves to an array of store locations.
 */
export const getStoreLocations = async (): Promise<Store[]> => {
    try {
        const q = query(storesCollection);
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Store));
    } catch (error) {
        console.error("Error fetching store locations: ", error);
        throw new Error('Failed to fetch store locations.');
    }
};
