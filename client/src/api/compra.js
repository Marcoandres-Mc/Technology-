import axios from 'axios';
import API from './urlAPI';

export const getCompras = async () => {
    try {
        const response = await axios.get(`${API}/api/compras`);
        return response.data;
    } catch (error) {
        console.error('Error fetching compras:', error);
        return [];
    }
};

export const getCompraById = async (id) => {
    try {
        const response = await axios.get(`${API}/api/compras/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching compra:', error);
        return [];
    }
};

export const createCompra = (compra) => {
    return axios.post(`${API}/api/compras`, compra);
}

export const updateCompra = (id, compra) => {
    return axios.put(`${API}/api/compras/${id}`, compra);
}

export const deleteCompra = (id) => {
    return axios.delete(`${API}/api/compras/${id}`);
};