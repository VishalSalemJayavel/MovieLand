import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//1e5708f3

const API_URL = 'http://www.omdbapi.com?apikey=1e5708f3';



const App = () => {
    const [movies , setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');

    const serachMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() =>{
        serachMovies('Spiderman')
    },[])
    return(
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) }
            />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={() => serachMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0
            ? (
                <div className="container">
                {movies.map((movie) =>(
                    <MovieCard movie = {movie} />
                ))}
                </div>
            ) :
            (
                <div className="empty">
                    <h2>No movies Found</h2>
                </div>
            )
        }

        
    </div>
    );
}

export default App;