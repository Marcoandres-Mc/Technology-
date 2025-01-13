import axios from 'axios';
import { API } from './urlAPI';

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

export const updateAdmin = async (admin,id) => {
    try {
      const response = await axios.put(`${API}/api/auth/admin/${id}`, admin);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with id ${admin._id}:`, error);
      return null;
    }
  }


export const deleteAdmin = async (id) => {
    try {
      const response = await axios.delete(`${API}/api/auth/admins/${id}`);
      return response.data;
      
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
      return null;
    }
  };


export const registerAdmin = async (admin) => { 
    try {
        const response = await axios.post(`${API}/api/auth/register`, admin);
        return response.data;
      } catch (error) {
        console.error('Error registering pelicula:', error);
        return null;
      }

};

export const loginAdmin = (user) => {
    return axios.post(`${API}/api/auth/login`, user);
};

export const logoutAdmin = () => {
    return axios.post(`${API}/api/auth/logout`);
};