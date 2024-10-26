import { Link } from "react-router-dom";
import styled from "styled-components";
import ViewIcon from "../assets/ViewIcon";
import HomeIcon from "../assets/HomeIcon";
import AddIcon from "../assets/AddIcon";
import UserIcon from "../assets/UserIcon";

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
  margin-left: 20px;
`;

function Header() {
  return (
    <Navigation>
      <StyledLink to="/home">
        <HomeIcon />
      </StyledLink>
      <StyledLink to="/add">
        <AddIcon />
      </StyledLink>
      <StyledLink to="/view">
        <ViewIcon />
      </StyledLink>
      <StyledLink to="/profile">
        <UserIcon />
      </StyledLink>
    </Navigation>
  );
}

export default Header;
