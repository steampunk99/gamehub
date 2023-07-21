import UseGames from '../hooks/UseGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'



const GameGrid = () => {
const {games, error}=UseGames()

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:3, lg:4, xl:4}} padding={10} spacing={10}>
     {games.map((game) => (
     <GameCard key={game.id} game={game}/>
     ))} 
     </SimpleGrid>
     </>
  )
}

export default GameGrid
