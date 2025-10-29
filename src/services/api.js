import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api/products", // 👈 backend base URL
});

// Get all products
export const getProducts = () => API.get("/");

// Create a new product
export const createProduct = (data) => API.post("/", data);

// Delete a product by ID
export const deleteProduct = (id) => API.delete(`/${id}`);

// Update a product by ID
export const updateProduct = (id, data) => API.put(`/${id}`, data);

export default API;
