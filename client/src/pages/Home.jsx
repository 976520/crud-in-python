import React from "react";
import { Link } from "react-router-dom";
import { Container, Title } from "./Style";

function Home() {
  return (
    <Container>
      <Header />
      <Title>나도 이제 백엔드?</Title>
    </Container>
  );
}

export default Home;
