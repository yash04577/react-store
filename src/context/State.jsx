import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import Context from './Context';




const State = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const[cartItems, setCartItems] = useState([]);
    const [cartItemsPrice, setCartItemsPrice] = useState(0);

    const getAllProduct = () =>{
        return allProducts;
    }

    const getData = async () =>{
        const {data} = await axios.get("https://dummyjson.com/products")
        // const {data} = await axios.get("https://dummyjson.com/products/category/smartphones")
        console.log(data.products);
        setAllProducts(data.products)
    }


    const getSingleProduct = () =>{
        return singleProduct;
    }

    const updateSingleProduct = (product) =>{
        setSingleProduct(product);
    }

    const getCartItem = ()=>{
        return cartItems;
    }

    const updateCartItems = (item)=>{
        setCartItems((cartItems)=> [...cartItems, item]);
        let temp = eval(item.price);
        setCartItemsPrice(cartItemsPrice + temp);
    }

    const removeFromCart = (item) =>{
        setCartItems((cartItems).filter(citem=>citem.title !== item.title))
        let temp = eval(item.price);
        setCartItemsPrice(cartItemsPrice - temp);
    }

    const getCartItemsPrice = () =>{
        return cartItemsPrice;
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <Context.Provider value={{getAllProduct, getSingleProduct, updateSingleProduct, getCartItem, updateCartItems, removeFromCart, getCartItemsPrice}}>
        {props.children}
    </Context.Provider>
  )
}

export default State