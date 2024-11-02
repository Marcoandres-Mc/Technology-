import axios from 'axios';


const API = import.meta.env.VITE_API_URL;

export const getAdmins = async () => {
    try {
        const response = await axios.get(`${API}/api/admins`);
        return response.data;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
};

export const getAdmin = async (id) => {
    try {
        const response = await axios.get(`${API}/api/admins/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching admin:', error);
        return [];
    }
};

export const registerAdmin = (user) => { 
    return axios.post(`${API}/api/auth/register`, user);
};

export const deleteAdmin = (id) => {
    return axios.delete(`${API}/api/admins/${id}`);
};

export const loginAdmin = (user) => {
    return axios.post(`${API}/api/auth/login`, user);
};

export const logoutAdmin = () => {
    return axios.post(`${API}/api/auth/logout`);
};