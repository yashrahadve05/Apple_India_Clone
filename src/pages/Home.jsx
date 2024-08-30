import React from 'react'
import Header from '../components/Header'
import Info from '../components/Info'
import Product from '../components/Product'
import Section from '../components/Section'
import Hero from '../components/Hero'
import { styled, Box } from "@mui/material"


const Component = styled(Box)({
  height: '100vh',
  width: '100%',
  background: 'green',
  alignContent: 'center'
})

function Home() {
  return (
    <div>
        <Component>
          <Header />
          <Info />
          <Hero />
        </Component>
        <Product />
        <Section />
    </div>
  )
}

export default Home