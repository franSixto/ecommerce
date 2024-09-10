import React from 'react';
import { getCategories } from '../services/products';

const UseCategory = () => {
    
 const [category, setCategory] = React.useState([]);

 React.useEffect(() => {
    getCategories()
    .then((res) => {
        setCategory(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
 }, []);

 return { category };
    
}
