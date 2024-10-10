import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/add">
        <button>Add</button>
      </Link>
      <Link to="/view">
        <button>View</button>
      </Link>
    </nav>
  );
}

export default Header;
