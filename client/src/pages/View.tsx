import React from "react";
import useBoard from "../hooks/useBoard.tsx";
import BoardTable from "../components/Table/BoardTable.tsx";
import { Container } from "../components/Container.tsx";
import { Title } from "../components/Title.tsx";
import Header from "../components/Header.tsx";

const View: React.FC = () => {
  const { board, handleDelete } = useBoard();

  return (
    <Container>
      <Header />
      <Title>게시물 조회</Title>
      <BoardTable board={board} onDelete={handleDelete} />
    </Container>
  );
};

export default View;
