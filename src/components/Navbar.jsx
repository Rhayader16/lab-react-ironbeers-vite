import { Link, Outlet } from "react-router-dom";
import picture from "./../assets/home-icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <img src={picture} alt="" />
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
