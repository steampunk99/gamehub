import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"/>
    </HStack>
  )
}

export default Navbar
