import React from 'react'
import { CardCharacters } from './CardCharacters'

export const Card = ({title, openingCrawl, characters}) => {

    useEffect(() => {
        getMovies('https://swapi.dev/api/people/1/').then((data) => {
          setMovies(data.results);
        })
      }, [])
    
    return (
        <div>
            <p>{title}</p> 
            <p>{openingCrawl}</p>
            <ul>
                {
                    <CardCharacter characters = {characters}/>
                }
            </ul>       
        </div>
    )
}
