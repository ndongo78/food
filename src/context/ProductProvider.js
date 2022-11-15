import {createContext, useState} from "react";
import axios from "axios";

export const productsContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [notFound, setNotFound] = useState(false);

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
                if (response.data){
                   const datas= response.data.map((item,index) =>(
                        {
                            key:index,
                            ...item,
                            qty:1
                        }
                    ))
                    setProducts(datas)
                }

            })
            .catch(error => {
                console.log("errors",error.response.data)
            })
    }

    const addToCart=(item)=>{
       const exist=cart.find(product=>product._id ===item._id)
       if(exist){
        return  exist.qty+=1;
         //cart.push(exist)
       }{
        setCart((prevState=>[...prevState, item]))
       }
    }
    
    const addQty=(item)=>{
      const exist=cart.find(product=>product._id ===item._id)
       // console.log("items", exist)
       if(exist){
          exist.qty+=1;
        return  setCart((prevState=>[...prevState]))
       }else {
           addToCart(item)
       }
    }
    
    const removeQty=(item)=>{
      const exist=cart.find(product=>product._id ===item._id)
       if(exist && exist.qty !== 1){
          exist.qty-=1;
         return setCart((prevState=>[...prevState]))
       }
    }
    const total=()=>{
        return cart.reduce((accumulator,curentValue)=>accumulator + curentValue.price * curentValue.qty,0)
        //console.log('totals',total)
    }
    const totalArticle=()=>{
        return  cart.reduce((accumulator,curentValue)=>accumulator + curentValue.qty,0 )
        //console.log('totals',art)
    }

    //search item
    const searchProduct=(text)=>{
        const result=products.filter(item=> item.name.includes(text))
        if(result.length === 0){
            setNotFound(true)
        }
        setSearchList(result)
    }


    return (
        <productsContext.Provider value={{
            products,
            cart,
            fetchData,
            fetchAllData,
            addToCart,
            addQty,
            removeQty,
            total,
            totalArticle,
            searchProduct,
            searchList,
            notFound
        }}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductProvider