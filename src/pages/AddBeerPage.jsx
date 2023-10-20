import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./AddBeerPage.css";

function AddBeerPage() {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerData({
      ...beerData,
      [name]: name === "attenuation_level" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new-beer", beerData)
      .then((response) => {
        console.log("Nuova birra creata:", response.data);
      })
      .catch((error) => {
        console.error("Errore durante la creazione della birra:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Add a New Beer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={beerData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={beerData.tagline}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={beerData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={beerData.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Brewer's Tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={beerData.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Attenuation Level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contributed By:</label>
          <input
            type="text"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
