import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {randomBeer ? (
        <div>
          <img
            style={{ width: "25vw" }}
            src={randomBeer.image_url}
            alt={randomBeer.name}
          />
          <h2>{randomBeer.name}</h2>
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomBeerPage;
