import axios from 'axios';

const url = 'http://127.0.0.1:8000'

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const fetchUserDetails = async (userId) => {
    try {
        const response = await axios.get(`${url}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

export const updateUserDetails = async (userId, userData) => {
    try {
        const response = await axios.put(`${url}/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};