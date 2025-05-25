import React from 'react'
import Box from './box'
import HeroSlider from './slider'
import MySlider from './slider1'
import Brands from './brands'
import Bestseller from './bestseller'
import Icon from './icon'

export default function Body() {
  return (
    <div>
        <HeroSlider />
        <Box />
        <MySlider />
        <Bestseller />
        <Icon />
        <Brands />
    </div>
  )
}
