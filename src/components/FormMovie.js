import React, { useRef } from 'react'

const FormMovie = () => {

    let title = useRef()
    let posterUrl = useRef()
    let description = useRef()
    let rating = useRef()

    const addMovie = () => {
        if (title.current.value || posterUrl.current.value || description.current.value || rating.current.value){
            fetch('http://localhost:3001/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title.current.value,
                    posterUrl: posterUrl.current.value,
                    description: description.current.value,
                    rating: rating.current.value
                })
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }
    }

  return (
    <div style={style}>
        <labe>title:</labe>
        <input type='text' ref={title}/>
        <labe>posterUrl:</labe>
        <input type='url' ref={posterUrl}/>
        <labe>description:</labe>
        <input type='text' ref={description}/>
        <labe>Rating:</labe>
        <input type='number' ref={rating}/>
        <button onClick={addMovie}>Submit</button>
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

export default FormMovie