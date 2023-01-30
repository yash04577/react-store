import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Products from '../components/Products'
import SearchedProducts from '../components/SearchedProducts'


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* height: 100vh; */
    /* border: 5px solid rebeccapurple; */
`

const Container = styled.div`
    width: 70%;
    /* height: 100%; */
    margin: 0 auto;
    /* border: 2px solid red; */
`


const SidebarWrapper = styled.div`
    width: 20vw;
    height: 100vh;
    /* border: 2px solid teal; */
    background-color: ghostwhite;
    position: sticky;
    top: 22px;
`


const NavLinks = styled.div`
    display: flex;
    flex-flow: column;
    /* justify-content: space-between; */
    list-style: none;
    align-items: center;
    gap: 10px;
    padding-top: 30px;
    /* text-align: center; */
`

const NavLink = styled.a`
    /* height: 40vh; */
    text-decoration: none;
    color: black;
    position: relative;
    font-size: large;
    &:hover{
        color:teal;
        /* font-weight: bold; */
    }

`

const Heading = styled.h3`
  text-align: center;
`



const PriceFilterContainer = styled.div`
    display: flex;
    flex-flow: column;
    /* justify-content: space-between; */
    list-style: none;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
    /* text-align: center; */

    button{
      width: 60%;
    height: 40px;
    background-color: transparent;
    border-radius: 12px;
    border: 1.5px solid black;
    margin-left: 15px;
    margin-top: 15px;
    cursor: pointer;
    color: white;
    background-color: teal;
    border: none;

    &:active{
        box-shadow: 0 0 6px red;
    }

    &:hover{
        background-color: #0080809e;
        color: black;
    }
    }
`

const PriceFilter = styled.input`
  
`


const Home = () => {

  const navigate = useNavigate();

  const clickHandler = () =>{
    // navigate(".groceries")
    // to=""
  }


  return (
    <Wrapper>
        <SidebarWrapper>
          
          <NavLinks>
            <Heading>Categorie</Heading>
            <NavLink href="#smartphones">smartphones</NavLink>
            <NavLink href="#laptops">laptops</NavLink>
            <NavLink href="#fragrances">fragrances</NavLink>
            <NavLink href="#furniture">furniture</NavLink>
            <NavLink href="#automotive">automotive</NavLink>
            <NavLink href="#groceries">groceries</NavLink>
            <NavLink href="#tops">tops</NavLink>
            <NavLink href="#mens-shoes">mens-shoes</NavLink>
          </NavLinks>

          <PriceFilterContainer>
            <Heading>Filter by Price</Heading>
            <PriceFilter type='range' ></PriceFilter>
            <button>Clear filter</button>
          </PriceFilterContainer>

        </SidebarWrapper>
        <Container>
            
            <Banner></Banner>
            <SearchedProducts heading={"Similar items in search"}></SearchedProducts>
            <Products heading={"smartphones"}></Products>
            <br />
            <br />
            <Products heading={"laptops"}></Products>
            <br />
            <br />
            <Products heading={"fragrances"}></Products>
            <br />
            <br />
            <Products heading={"skincare"}></Products>
            <br />
            <br />
            <Products heading={"groceries"}></Products>
            <br />
            <br />
            <Products heading={"home-decoration"}></Products>
            <br />
            <br />
            <Products heading={"furniture"}></Products>
            <br />
            <br />
            <Products heading={"tops"}></Products>
            <br />
            <br />
            <Products heading={"womens-dresses"}></Products>
            <br />
            <br />
            <Products heading={"womens-shoes"}></Products>
            <br />
            <br />
            <Products heading={"mens-shirts"}></Products>
            <br />
            <br />
            <Products heading={"mens-shoes"}></Products>
            <br />
            <br />
            <Products heading={"mens-watches"}></Products>
            <br />
            <br />
            <Products heading={"womens-watches"}></Products>
            <br />
            <br />
            <Products heading={"womens-bags"}></Products>
            <br />
            <br />
            <Products heading={"womens-jewellery"}></Products>
            <br />
            <br />
            <Products heading={"sunglasses"}></Products>
            <br />
            <br />
            <Products heading={"automotive"}></Products>
            <br />
            <br />
            <Products heading={"motorcycle"}></Products>
            <br />
            <br />
            <Products heading={"lighting"}></Products>
            <br />
            <br /> 

        </Container>

        
    </Wrapper>
  )
}

export default Home