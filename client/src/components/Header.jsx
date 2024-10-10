import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/home">
        <img src="../assets/Home.svg" alt="Home" />
      </Link>
      <Link to="/add">
        <img src="../assets/Pencil.svg" alt="Add" />
      </Link>
      <Link to="/view">
        <img src="../assets/List.svg" alt="View" />
      </Link>
    </nav>
  );
}

export default Header;
