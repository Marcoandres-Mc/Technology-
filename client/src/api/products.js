import axios from 'axios';

const API = "http://localhost:3500";

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

