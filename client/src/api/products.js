import axios from 'axios';

const API = "http://localhost:3500"  //import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const registerProduct = (product) => { 
    return axios.post(`${API}/api/products`, product);
}

export const deleteProduct = (id) => {
    return axios.delete(`${API}/api/products/${id}`);
}

