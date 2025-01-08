import axios from 'axios';

import {API} from './urlAPI';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${API}/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return [];
    }
}

export const updateProduct = (id, product) => {
    return axios.put(`${API}/api/products/${id}`, product);
}


export const registerProduct = (product) => { 
    return axios.post(`${API}/api/products`, product);
}

export const deleteProduct = (id) => {
    return axios.delete(`${API}/api/products/${id}`);
}

