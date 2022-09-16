import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <header 
        className= "banner"
        style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://whatchareading.com/wp-content/uploads/2015/04/Netflix-Marvels-Daredevil-Banner.jpg")`,
        backgroundPosition: "center center",
  }}>


        <div class="banner__contents">
            <h1 class="banner__title">Movie Name</h1> 

            <div class="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <h1 class="banner__description">This is a test description.</h1>
        </div>

        <div class="banner--fadeBotton" />

     
        

    </header>

  );
  
}

export default Banner