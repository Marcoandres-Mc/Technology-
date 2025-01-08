import axios from 'axios';
import {API} from './urlAPI';

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API}/api/cuentas/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const getUser = async (id) => {
    try {
        const response = await axios.get(`${API}/api/cuentas/usuarios/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return [];
    }
}

export const registerUser = (user) => { 
    return axios.post(`${API}/api/cuentas/usuarios`,user);
}

export const deleteUser = (id) => {
    return axios.delete(`${API}/api/cuentas/usuarios/${id}`);
}
