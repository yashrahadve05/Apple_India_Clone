import React from 'react'
import Header from '../components/Header'
import Info from '../components/Info'
import Product from '../components/Product'
import Section from '../components/Section'
import Hero from '../components/Hero'
import { styled, Box } from "@mui/material"
import { productsSection } from '../constants/constant'


const Component = styled(Box)({
  height: '100vh',
  maxHeight: '800px',
  width: '100%',
  background: 'green',
  alignContent: 'center'
})

// const Section = styled(Box)({
//   backgroundColor: 'blue'
// })

function Home() {
  return (
    <div>
        <Component>
          <Header />
          <Info />
          <Hero />
        </Component>
        <Section data={productsSection.iphone}/>
        <Section data={productsSection.iphonePro}/>
        <Section data={productsSection.macbookpro}/>
        <Product />
    </div>
  )
}

export default Home