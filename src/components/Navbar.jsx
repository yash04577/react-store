import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { ShoppingCartOutlined } from '@material-ui/icons'
import { PersonOutlineOutlined } from '@material-ui/icons'
import { SearchOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import Context from '../context/Context'
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
`

const SerachInput = styled.div`
    width: 30vw;
    display: flex;
    position: relative;
`

const Navbar = () => {

    const context = useContext(Context);

    const searchClickHandler = () => {
        window.alert("Search Funcnality is not Avilabel yet!!")
       
    }

    // const filterItem = () =>{

    // }


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
                        <NavLink to="#" >Categories</NavLink>
                        <NavLink to="#" >Deals</NavLink>
                        <NavLink to="#" >Whats New</NavLink>
                        <NavLink to="#" >Delivery</NavLink>
                        <SerachInput >
                            <input type="text" id='searchInput' style={{ width: "100%", paddingLeft:"10px" }} placeholder="Search Here"></input>
                            <SearchOutlined onClick={searchClickHandler} style={{ cursor: "pointer", position: "absolute", right: "0px", marginRight: "7px", top: "2px" }}></SearchOutlined>
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