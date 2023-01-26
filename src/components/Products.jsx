import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import Context from '../context/Context'
import ProductCard from './ProductCard'


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    /* border: 2px solid gold; */
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
    @media (max-width: 400px){
      justify-content: center;
    }
    gap: 25px;
`


const Heading = styled.h1`
    font-size: 20px;
    padding: 20px 0;
    font-size: 35px;
`


const Products = () => {


  const context = useContext(Context);

  return (
    <Wrapper>
        <Heading>Headphone</Heading>
        <Container>

        {
          context.getAllProduct().map(elem=>{
            return(
              <ProductCard elem={elem}></ProductCard>
            )
          })
        }
        {/* <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard> */}
        </Container>
    </Wrapper>
  )
}

export default Products