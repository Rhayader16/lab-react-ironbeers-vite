import { Link } from "react-router-dom";
import allBeers from "./AllBeersPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  //const params = useParams();
  let { beerId } = useParams();
  const url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

  const getBeer = () => {
    axios
      .get(url)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBeer();
    console.log(beer);
  }, []);

  if (!beer) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <ul style={{ listStyleType: "none" }}>
        <li>
          {" "}
          <img style={{ width: "10vw" }} src={beer.image_url} alt="" />{" "}
        </li>
        <li>{beer.name}</li>
        <li>{beer.tagline}</li>
        <li>First brewed:{beer.first_brewed}</li>
        <li>Attenuation level: {beer.attenuation_level}</li>
        <li>Contributed by: {beer.contributed_by}</li>
      </ul>
    </>
  );
}

export default BeerDetailsPage;
