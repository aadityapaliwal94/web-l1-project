// API service functions for products data (stubbed to simulate API calls)
import { carouselImages } from '../data/carouselData';
import { products } from '../data/productsData';
import { sponsorsData } from '../data/sponsorsData';

/**
 * Simulates API call to fetch carousel images
 * @returns {Promise<Array>} Promise that resolves to carousel images array
 */
export const fetchCarouselImages = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return {
        data: carouselImages,
        status: 200,
        message: 'Success'
    };
};

/**
 * Simulates API call to fetch products
 * @returns {Promise<Array>} Promise that resolves to products array
 */
export const fetchProducts = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return {
        data: products,
        status: 200,
        message: 'Success'
    };
};

/**
 * Simulates API call to fetch sponsors data
 * @returns {Promise<Array>} Promise that resolves to sponsors array
 */
export const fetchSponsors = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return {
        data: sponsorsData,
        status: 200,
        message: 'Success'
    };
};
