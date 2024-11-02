import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const registerProduct = (product) => { 
    return axios.post(`${API}/products`, product);
}

export const deleteProduct = (id) => {
    return axios.delete(`${API}/products/${id}`);
}

