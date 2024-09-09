import axios from "axios";

export async function getAllProducts() {
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log);
    return await axios.get('https://dummyjson.com/products')
};

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/product/${id}`);
}