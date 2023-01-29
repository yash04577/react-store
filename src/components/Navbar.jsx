import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { ShoppingCartOutlined } from '@material-ui/icons'
import { PersonOutlineOutlined } from '@material-ui/icons'
import { SearchOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import Context from '../context/Context'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
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


    const navigate = useNavigate();

    const searchClickHandler = async () => {

        const {data} = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`)
        console.log("test = ", data.products[0])
        // console.log("query = ", query)
        context.updateSingleProduct(data.products[0]);

        console.log("len = ", data.products.length)
        if(data.products.length > 0){
            navigate("/singleproduct")
        }
        else{
            window.alert("product not avilable")
        }
    }

    const catHandler = () =>{
        // window.alert("text")

        let cat = document.getElementById("categorie");
        console.log("cat = ", cat);

        if(cat.style.display === "flex"){
            cat.style.display = "none";
        }
        else{
            cat.style.display = "flex";
        }
    }


    const searchChangeHandler = () =>{
        // setSearchQuery(searchInput.value);
        const query = document.getElementById('searchInput').value;
        setSearchQuery(query);
    }

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
                        <NavLink to="#"  onClick={catHandler}>
                            Categories
                            <CategoriesContainer id="categorie">
                                <NavLink to="/electronics" >Electronics</NavLink>
                                <NavLink to="/smartphone" >SmartPhone</NavLink>
                                <NavLink to="/clothing" >Clothing</NavLink>
                                <NavLink to="/fashion" >Fashion</NavLink>
                            </CategoriesContainer>
                        </NavLink>
                        <NavLink to="#" >Deals</NavLink>
                        <NavLink to="#" >Whats New</NavLink>
                        <NavLink to="#" >Delivery</NavLink>
                        <SerachInput >
                            <input type="text" id='searchInput' value={searchQuery} onChange={searchChangeHandler} style={{ width: "100%", paddingLeft:"10px" }} placeholder="Search Here"></input>
                            <SearchOutlined onClick={()=>searchClickHandler()} style={{ cursor: "pointer", position: "absolute", right: "0px", marginRight: "7px", top: "2px" }}></SearchOutlined>
                        </SerachInput>
                        <NavLink to="#"><PersonOutlineOutlined /></NavLink>
                        <Badge badgeContent={context.getCartItem().length} color="primary" style={{ marginRight: "20px" }}>
                            <NavLink to="/cart"><ShoppingCartOutlined /></NavLink>
                        </Badge>
                    </NavLinks>
                </Container>
            </Wrapper>
        </>
    )
}

export default Navbar