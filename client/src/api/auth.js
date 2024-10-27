import axios from 'axios';

const API = "http://localhost:3500/api";

export const getAdmins = async () => {
    try {
      const response = await axios.get(`${API}/cuentas/admins`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const registerAdmin = (user) => { 
    return axios.post(`${API}/cuentas/admins`,user);
}

export const deleteAdmin = (id) => {
    return axios.delete(`${API}/cuentas/admins/${id}`);
}