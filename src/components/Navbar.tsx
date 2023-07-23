import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.jpg"
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="30px">
      <Image src={logo} boxSize="60px" borderRadius='8px'/>
      <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
