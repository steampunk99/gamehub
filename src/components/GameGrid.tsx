import UseGames from '../hooks/UseGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'



const GameGrid = () => {
const {games, error,isLoading}=UseGames()
const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:3, lg:4, xl:4}} padding={10} spacing={10}>
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
     {games.map((game) => (
     <GameCard key={game.id} game={game}/>
     ))} 
     </SimpleGrid>
     </>
  )
}

export default GameGrid
