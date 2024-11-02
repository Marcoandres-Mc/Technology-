import axios from 'axios';

const API = process.env.API_URL;

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API}/cuentas/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const registerUser = (user) => { 
    return axios.post(`${API}/cuentas/usuarios`,user);
}

export const deleteUser = (id) => {
    return axios.delete(`${API}/cuentas/usuarios/${id}`);
}
