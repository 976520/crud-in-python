import React from "react";
import useBoard from "../hooks/useBoard";
import styled from "styled-components";
import Form from "../components/Form/Form";
import BoardTable from "../components/Table/BoardTable";

const Container = styled.div`
  text-align: center;
  background: #e0e0e0;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #b0b0b0, -8px -8px 16px #ffffff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-shadow: 1px 1px 2px #fff;
`;

function Home() {
  const { board, title, setTitle, context, setContext, handleSubmit, handleDelete } = useBoard();

  return (
    <Container>
      <Title>나도 이제 백엔드?</Title>
      <h4>add</h4>
      <Form title={title} setTitle={setTitle} context={context} setContext={setContext} handleSubmit={handleSubmit} />
      <h4>view</h4>
      <BoardTable board={board} onDelete={handleDelete} />
    </Container>
  );
}

export default Home;
