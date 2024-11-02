import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
    try {
      const response = await axios.get(`/api/${API}/cuentas/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const registerUser = (user) => { 
    return axios.post(`/api/${API}/cuentas/usuarios`,user);
}

export const deleteUser = (id) => {
    return axios.delete(`/api/${API}/cuentas/usuarios/${id}`);
}
