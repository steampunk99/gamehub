import React from 'react'
import { Games } from '../hooks/UseGames'
import { Card, CardBody, Heading, Image,Text } from '@chakra-ui/react'


interface Props {
    game: Games
}
const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        {game.parent_platforms.map(({platform})=> <Text>{platform.name}</Text>)}
      </CardBody>
    </Card>
  )
}

export default GameCard
