import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/summarize'; // Replace with your actual API endpoint

export const summarizeDocument = async (document: string, userSpecifications: object) => {
    try {
        const response = await axios.post(API_BASE_URL, {
            document,
            specifications: userSpecifications,
        });
        return response.data;
    } catch (error) {
        console.error('Error summarizing document:', error);
        throw error;
    }
};

export const summarizeArticle = async (articleUrl: string, userSpecifications: object) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/article`, {
            url: articleUrl,
            specifications: userSpecifications,
        });
        return response.data;
    } catch (error) {
        console.error('Error summarizing article:', error);
        throw error;
    }
};