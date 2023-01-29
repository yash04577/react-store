import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Products from '../components/Products'

const Wrapper = styled.div`
    width: 100%;
    /* height: 100vh; */
    /* border: 2ppx solid rebeccapurple; */
`

const Container = styled.div`
    width: 95%;
    /* height: 100%; */
    margin: 0 auto;
    /* border: 2px solid red; */
`

const Home = () => {
  return (
    <Wrapper>
        <Container>
            <Banner></Banner>
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