import allBeers from "./../assets/beers.png";
import randomBeer from "./../assets/random-beer.png";
import newBeer from "./../assets/new-beer.png";
import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage";
import RandomBeersPage from "./RandomBeerPage";
import AddBeerPage from "./AddBeerPage";

function HomePage() {
  return (
    <>
      <section>
        <Link to={"/beers"}>All beers</Link>
        <img style={{ width: "100vw" }} src={allBeers} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          architecto? Hic exercitationem vitae cupiditate, ipsa maxime
          distinctio aut itaque. Accusamus vitae laborum perferendis deleniti
          quae provident? Corrupti deserunt magni ipsa.
        </p>
      </section>
      <section>
        <Link to={"/random-beer"}>Random Beer</Link>
        <img style={{ width: "100vw" }} src={randomBeer} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          architecto? Hic exercitationem vitae cupiditate, ipsa maxime
          distinctio aut itaque. Accusamus vitae laborum perferendis deleniti
          quae provident? Corrupti deserunt magni ipsa.
        </p>
      </section>
      <section>
        <Link to={"/new-beer"}>New Beer</Link>
        <img style={{ width: "100vw" }} src={newBeer} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          architecto? Hic exercitationem vitae cupiditate, ipsa maxime
          distinctio aut itaque. Accusamus vitae laborum perferendis deleniti
          quae provident? Corrupti deserunt magni ipsa.
        </p>
      </section>
    </>
  );
}

export default HomePage;
