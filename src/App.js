import React,{useEffect, useState} from 'react';
import './App.css';

import Movie from './Movie';
import Header from './Header';


const API_KEY = '4e44d9029b1270a757cddc766a1bcb63';



function App() {

  

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Spiderman');
  

  useEffect( () => {
    const IMAGE_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;

     fetch(IMAGE_API)
     .then(res => res.json())
     .then((data) => {
       console.log(data.results);
       setMovies(data.results);
     })
    
  },[searchTerm])

  const submitHandler = (event) => {
      event.preventDefault();
      setSearchTerm('')
  }

  const handleOnChange = (event) => {
     setSearchTerm(event.target.value)
  }

  
  

  return (
    <>
    <Header/>
    <form onSubmit={submitHandler}>
    <input className="search" value={searchTerm} onChange={handleOnChange} type="search" placeholder="Search ..."/>
    </form>
      
    
   { searchTerm  ? <div className="movie-container">
      
        {movies.length > 0 && movies.map((movie) => {
          return <Movie key={movie.id} {...movie}/>
        })}
    </div> : <p>No movies to show. Try to search some ....</p>}
    </>
  );
}

export default App;
