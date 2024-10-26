import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ViewIcon from "../assets/ViewIcon.tsx";
import HomeIcon from "../assets/HomeIcon.tsx";
import AddIcon from "../assets/AddIcon.tsx";
import UserIcon from "../assets/UserIcon.tsx";

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
