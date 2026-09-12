import React from 'react'
import Box from './box'
import HeroSlider from './slider'
import MySlider from './slider1'
import Brands from './brands'
import Bestseller from './bestseller'
import Categories from './categories'

export default function Body() {
  return (
    <div className='space-y-7 pb-4 sm:space-y-10'>
        <HeroSlider />
        <Box />
        <MySlider />
        <Bestseller />
        <Categories />
        <Brands />
    </div>
  )
}
