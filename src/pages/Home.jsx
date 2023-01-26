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
            <Products></Products>
            <br />
            <hr />
            <br />
            <Products></Products>
            <br />
            <hr />
            <br />
            <Products></Products>
        </Container>
    </Wrapper>
  )
}

export default Home