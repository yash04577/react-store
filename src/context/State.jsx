import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import Context from './Context';




const State = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const[cartItems, setCartItems] = useState([]);
    const [cartItemsPrice, setCartItemsPrice] = useState(0);

    const[searchItem, setSearchItem] = useState({});

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

    const getSearchItem = () =>{
        return searchItem;
    }

    const updateSearchItem = async (query) =>{
        // fetch()
        // const {data} = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
        // // const {data} = await axios.get("https://dummyjson.com/products/category/smartphones")
        // console.log("data = ", data);
        // // setAllProducts(data.products)
        // await setSearchItem(data.products[0]);
        // // updateSingleProduct(searchItem[0]);
        // setSingleProduct(searchItem);
        // console.log("single = ", searchItem)
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <Context.Provider value={{getAllProduct, getSingleProduct, updateSingleProduct, getCartItem, updateCartItems, removeFromCart, getCartItemsPrice, getSearchItem, updateSearchItem}}>
        {props.children}
    </Context.Provider>
  )
}

export default State