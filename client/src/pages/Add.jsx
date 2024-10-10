import React from "react";
import useBoard from "../hooks/useBoard";
import Form from "../components/Form/Form";
import { Container, Title } from "./Style";
import { Link } from "react-router-dom";

function Add() {
  const { title, setTitle, context, setContext, handleSubmit } = useBoard();

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
      <Title>게시물 추가</Title>
      <Form title={title} setTitle={setTitle} context={context} setContext={setContext} handleSubmit={handleSubmit} />
    </Container>
  );
}

export default Add;
