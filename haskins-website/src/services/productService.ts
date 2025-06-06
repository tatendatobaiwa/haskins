import { db } from './firebase.config';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

// Define the Product interface
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    specifications: Record<string, string>;
}

// Re-export the Product interface as default
export type { Product as default };

const productsCollection = collection(db, 'products');

/**
 * Fetches all products or products filtered by category.
 * @param category - Optional category to filter by.
 * @returns A promise that resolves to an array of products.
 */
export const getProducts = async (category?: string): Promise<Product[]> => {
    try {
        let q = query(productsCollection);
        if (category) {
            q = query(productsCollection, where('category', '==', category));
        }
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw new Error('Failed to fetch products.');
    }
};

/**
 * Fetches a single product by its ID.
 * @param id - The ID of the product to fetch.
 * @returns A promise that resolves to the product, or null if not found.
 */
export const getProductById = async (id: string): Promise<Product | null> => {
    try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as Product;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching product by ID: ", error);
        throw new Error('Failed to fetch product.');
    }
};
