import axios from 'axios';
import {API} from './urlAPI';

export const getAdmins = async () => {
    try {
        const response = await axios.get(`${API}/api/auth/admins`);
        return response.data;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
};

export const getAdmin = async (id) => {
    try {
        const response = await axios.get(`${API}/api/auth/admins/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching admin:', error);
        return [];
    }
};

export const updateAdmin = (id, user) => {
    return axios.put(`${API}/api/auth/admins/${id}`, user);
}

export const deleteAdmin = (id) => {
    return axios.delete(`${API}/api/auth/admins/${id}`);
};

export const registerAdmin = (user) => { 
    return axios.post(`${API}/api/auth/register`, user);
};

export const loginAdmin = (user) => {
    return axios.post(`${API}/api/auth/login`, user);
};

export const logoutAdmin = () => {
    return axios.post(`${API}/api/auth/logout`);
};