import React, { useEffect, useState } from 'react'
import { Card } from './components/Card';
import { getMovies } from './hooks/getMovies';

export const App = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data.results);
    })
  }, [])

  console.log(movies);

  return (
    <div>
      <p>Star wars</p>
      <div>
        {
          movies.map((movie) => (
            <Card 
              title={movie.title} 
              openingCrawl={movie.opening_crawl}
              characters={movie.characters}
            />
          ))
        }
      </div>
    </div>
  )
}

