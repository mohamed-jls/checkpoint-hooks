import React from 'react'

const MovieCard = ({movie}) => {

    function deleteMovie(){
        fetch(`http://localhost:3001/${movie.id}`,{
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

  return (
    <div style={styles.movieCard}>
        <img src={movie.posterUrl} alt="movie"style={styles.poster}/>
        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.description}>{movie.description}</p>
        <p style={styles.rating}>{movie.rating}</p>
        <button onClick={deleteMovie} style={styles.deleteButton}>delete</button>
    </div>
  )
}

const styles = {
    movieCard: {
        width: '200px',
        height: 'auto',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    poster: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    description: {
        fontSize: '0.9rem',
        marginBottom: '5px',
    },
    rating: {
        fontSize: '0.8rem',
        color: '#666',
    },
    deleteButton: {
        backgroundColor: '#ff0000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
    },
};

export default MovieCard