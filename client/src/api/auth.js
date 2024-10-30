import axios from 'axios';

const API = "http://localhost:3500/api/auth";

export const getAdmins = async () => {
    try {
      const response = await axios.get(`${API}/admins`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const registerAdmin = (user) => { 
    return axios.post(`${API}/register`,user);
}

export const deleteAdmin = (id) => {
<<<<<<< HEAD
    return axios.delete(`${API}/logout/${id}`);
=======
    return axios.delete(`${API}/admins/${id}`);
>>>>>>> committ
}

export const loginAdmin = (user) => {
    return axios.post(`${API}/login`,user);
<<<<<<< HEAD
=======
}

export const logoutAdmin = () => {
    return axios.post(`${API}/logout`);
>>>>>>> committ
}