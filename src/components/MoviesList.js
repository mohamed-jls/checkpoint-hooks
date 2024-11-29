import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard';

const MoviesList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/')
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .catch((err) => console.log(err))
    },[])


  return (
    <div style={style} >
        {movies.map((movie) => {
            return (
                <MovieCard  movie={movie} key={movie.id}/>
            )
        })}
    </div>
  )
}

const style = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'10px',
    border:'1px solid #ccc',
    borderRadius:'5px',
    padding:'10px',
    margin:'10px',
    backgroundColor:'#fff',
    boxShadow:'0 0 10px #ccc',
}

export default MoviesList