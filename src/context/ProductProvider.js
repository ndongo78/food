import {createContext, useState} from "react";
import axios from "axios";

export const productsContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchData = (category)=>{
        axios.get(
            `https://nd-del.herokuapp.com/api/products/${category}`,
            //{headers:{ Authorization: `Bearer ${token}`}}
        )
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.log("errors",error.response.data)
            })
    }
    const fetchAllData = ()=>{
        axios.get(
            `https://nd-del.herokuapp.com/api/products`,
            //{headers:{ Authorization: `Bearer ${token}`}}
        )
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.log("errors",error.response.data)
            })
    }

    const addToCart=(item)=>{
        setCart((prevState=>[...prevState, item]))
    }

    return (
        <productsContext.Provider value={{
            products,
            cart,
            fetchData,
            fetchAllData,
            addToCart
        }}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductProvider