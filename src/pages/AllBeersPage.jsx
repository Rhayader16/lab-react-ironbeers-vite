import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Navbar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../pages/AllBeersPage.css";

function AllBeersPage() {
  const [query, setQuery] = useState("");
  const [beers, setBeers] = useState([]);
  const url = `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`;

  const fetchAllBeers = async () => {
    try {
      const res = await axios.get(url);
      setBeers(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, [query]);

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Navbar />
      {beers.map((beer) => {
        return (
          <ul style={{ listStyleType: "none" }} key={beer._id}>
            <li>
              <img
                id={"beerImg"}
                style={{ width: "10vw" }}
                src={beer.image_url}
                alt=""
              />
            </li>
            <div>
              <Link to={beer._id}>
                <h2 key={beer._id}>{beer.name} </h2>
              </Link>
              <p id={"tagline"}>{beer.tagline}</p>
              <p id={"contributed"}>Contributed by: {beer.contributed_by}</p>
            </div>
          </ul>
        );
      })}
    </>
  );
}

export default AllBeersPage;
