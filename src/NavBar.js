import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="nav">
        <a><Link to="/search">Search</Link></a>
        <a><Link to="/details">Details</Link></a>
        <a><Link to="/home">Home</Link></a>
    </div>
  );
}

export default NavBar;
