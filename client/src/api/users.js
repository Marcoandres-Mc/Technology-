import axios from 'axios';

const API = "http://localhost:3500/api";

export const getUsers = () => {
    return axios.get(`${API}/cuentas/usuarios`);
}

export const registerUser = (user) => { 
    return axios.post(`${API}/cuentas/usuarios`,user);
}

export const deleteUser = (id) => {
    return axios.delete(`${API}/cuentas/usuarios/${id}`);
}
