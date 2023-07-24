import {useState,useEffect} from 'react'
import { CanceledError } from 'axios'

const useGenres = () => {
    const  [genres, setGenres] = useState<Games[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] =useState(false)

    useEffect(()=>{

        const controller = new AbortController();

        setLoading(true)
        apiClient.get<FetchGenresResponse>('/genres',{signal: controller.signal})
        .then(res => {setGames(res.data.results);
                    setLoading(false) 
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
        })
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useGenres
