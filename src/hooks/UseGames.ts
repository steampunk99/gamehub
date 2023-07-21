import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

export interface Platform {
id:number,
name: string,
slug: string
}

export interface Games {
    id: number,
    name: string,
    background_image: string
    parent_platforms: {platform: Platform}[],
    metacritic:number;
    }
    
interface FetchGamesResponse {
        count: number,
        results: Games[]
    }

const UseGames = () => {

    const  [games, setGames] = useState<Games[]>([])
    const [error, setError] = useState('')

    useEffect(()=>{

        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games',{signal: controller.signal})
        .then(res => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        })
    },[])

  return {games, error}
}

export default UseGames
