import React from 'react';
import "./Banner.css";

function Banner() {

  function truncate(str, n){
      return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  }


  return (
    <header 
        className= "banner"
        style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://t3.ftcdn.net/jpg/04/32/27/96/360_F_432279625_PzjAHY8BYDSKkcHR8m0S6n37gFqh68JM.jpg")`,
        backgroundPosition: "center center",
  }}>


        <div class="banner__contents">
            <h1 class="banner__title">Movie Name</h1> 

            <div class="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <h1 class="banner__description"> {truncate (`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum soluta veniam, ducimus accusantium, cumque deserunt possimus saepe in accusamus itaque suscipit officiis, ratione sint nostrum. Perferendis explicabo laborum, eum incidunt non eligendi commodi corporis? Et dignissimos corporis odit quas?`, 150)}
              </h1>
        </div>

        <div class="banner--fadeButton" />

     
        

    </header>

  );
  
}

export default Banner