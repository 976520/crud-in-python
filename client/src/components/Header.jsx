import { Link } from "react-router-dom";
import styled from "styled-components";
import ViewIcon from "../assets/ViewIcon";
import HomeIcon from "../assets/HomeIcon";
import AddIcon from "../assets/AddIcon";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
  margin-left: 20px;
`;

function Header() {
  return (
    <Nav>
      <StyledLink to="/home">
        <HomeIcon />
      </StyledLink>
      <StyledLink to="/add">
        <AddIcon />
      </StyledLink>
      <StyledLink to="/view">
        <ViewIcon />
      </StyledLink>
    </Nav>
  );
}

export default Header;
