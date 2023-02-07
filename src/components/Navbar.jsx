import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { ShoppingCartOutlined } from '@material-ui/icons'
import { PersonOutlineOutlined } from '@material-ui/icons'
import { SearchOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import Context from '../context/Context'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HashScroll } from "react-hash-scroll";
// import { Badge } from '@material-ui/icons'

const Wrapper = styled.div`
    width: 100%;
    height: 10vh;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: ghostwhite;
    /* border: 2px solid red; */
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* border: 2px solid black; */
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    padding: 0 30px;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 30px;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    position: relative;

    &:hover{
        color:teal;
        /* font-weight: bold; */
    }

`

const SerachInput = styled.div`
    width: 30vw;
    display: flex;
    position: relative;
`

const CategoriesContainer = styled.div`
    background-color: ghostwhite;
    /* border: 2px solid red; */
    width: 10vw;
    height: 30vh;
    position: absolute;
    left: -50%;
    top: 40px;
    /* right: 0; */
    margin: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
    display: none;
    transition: 1s;
    
`



const Navbar = () => {


    const context = useContext(Context);
    const [searchQuery, setSearchQuery] = useState("");

    const [laptops, setLaptops] = useState([]);


    const navigate = useNavigate();

    const searchClickHandler = async () => {

        context.updateSearchItem(searchQuery);
        document.getElementById("searchItemsContainer").style.display = "flex";
        // useNavigate("")

    }

    const catHandler = () => {
        // window.alert("text")

        let cat = document.getElementById("categorie");
        console.log("cat = ", cat);

        if (cat.style.display === "flex") {
            cat.style.display = "none";
        }
        else {
            cat.style.display = "flex";
        }
    }


    const searchChangeHandler = () => {
        // setSearchQuery(searchInput.value);
        const query = document.getElementById('searchInput').value;
        setSearchQuery(query);



        // setLaptops((laptops).filter(citem=>citem.price <= 1400))
        // let temp = eval(item.price);
        // setCartItemsPrice(cartItemsPrice - temp);


    }

    const test = async () => {
        const { data } = await axios.get('https://dummyjson.com/products/category/laptops');
        // setProducts(data.products);
        setLaptops(data.products);
        console.log("lap = ", laptops)
    }

    useEffect(() => {
        test();
    }, [])


    return (
        <>
            <Wrapper>

                <Container>
                    <Logo>
                        <NavLink to="/">
                            <h1>ShopCart</h1>
                        </NavLink>
                    </Logo>
                    <NavLinks>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about" >About</NavLink>
                        <NavLink to="/contact" >Contact</NavLink>
                        <SerachInput >
                            <input type="text" id='searchInput' value={searchQuery} onChange={searchChangeHandler} style={{ width: "100%", paddingLeft: "10px" }} placeholder="Search Here"></input>
                            <a href="#searchItemsContainer">
                                <SearchOutlined onClick={() => searchClickHandler()} style={{ cursor: "pointer", position: "absolute", right: "0px", marginRight: "7px", top: "2px" }}></SearchOutlined>
                            </a>
                        </SerachInput>
                        <NavLink to="/signup"><PersonOutlineOutlined /></NavLink>
                        {/* <NavLink to="/login"><PersonOutlineOutlined /></NavLink> */}
                        {/* <Badge badgeContent={context.getCartItem().length} color="primary" style={{ marginRight: "20px" }}> */}
                        <Badge badgeContent={context.getBadgeCount()} color="primary" style={{ marginRight: "20px" }}>
                            <NavLink to="/cart"><ShoppingCartOutlined /></NavLink>
                        </Badge>
                    </NavLinks>
                </Container>
            </Wrapper>
        </>
    )
}

export default Navbar