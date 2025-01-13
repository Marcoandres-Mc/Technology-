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


export const updateProduct = async (product) => {
  try {
    const response = await axios.put(`${API}/api/products/${product._id}`, product);
    return response.data;
  } catch (error) {
    console.error(`Error updating pelicula with id ${product._id}:`, error);
    return null;
  }
}

export const registerProduct = async (product) => {
  try {
    const response = await axios.post(`${API}/api/products`, product);
    return response.data;
  } catch (error) {
    console.error('Error registering pelicula:', error);
    return null;
  }
};

export const deleteProduct = (id) => {
    return axios.delete(`${API}/api/products/${id}`);
}

