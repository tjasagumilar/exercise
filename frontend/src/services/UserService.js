import axios from 'axios';

export const fetchUsers = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users?limit=20');
        return response.data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const fetchUserDetails = async (userId) => {
    try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};