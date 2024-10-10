import React from "react";
import { Link } from "react-router-dom";
import { Container, Title } from "./Style";

function Home() {
  return (
    <Container>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/add">
          <button>Add</button>
        </Link>
        <Link to="/view">
          <button>View</button>
        </Link>
      </div>
      <Title>나도 이제 백엔드?</Title>
    </Container>
  );
}

export default Home;
