import React from "react";
import useBoard from "../hooks/useBoard";
import BoardTable from "../components/Table/BoardTable";
import { Container, Title } from "../style/Style";
import Header from "../components/Header";

function View() {
  const { board, handleDelete } = useBoard();

  return (
    <Container>
      <Header />
      <Title>게시물 조회</Title>
      <BoardTable board={board} onDelete={handleDelete} />
    </Container>
  );
}

export default View;
