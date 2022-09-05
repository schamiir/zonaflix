import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from './Requests';

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          )
          return request;
      }

      fetchData();

  }, []);

  console.log(movie);

  function truncate(str, n){
      return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  }


  return (
    <header 
        className= "banner"
        style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
  }}>


        <div class="banner__contents">
            <h1 class="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1> 

            <div class="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <h1 class="banner__description"> {truncate (movie?.overview, 150)}
              </h1>
        </div>

        <div class="banner--fadeButton" />

     
        

    </header>

  );
  
}

export default Banner