import React from "react";
import useBoard from "../hooks/useBoard";
import BoardTable from "../components/Table/BoardTable";
import { Container, Title } from "./Style";
import { Link } from "react-router-dom";

function View() {
  const { board, handleDelete } = useBoard();

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
      <Title>게시물 조회</Title>
      <BoardTable board={board} onDelete={handleDelete} />
    </Container>
  );
}

export default View;
