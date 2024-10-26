import React from "react";
import { Container, Title } from "../style/Style";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>나도 이제 백엔드?</Title>
    </Container>
  );
};

export default Home;
