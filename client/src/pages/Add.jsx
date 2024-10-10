import React from "react";
import useBoard from "../hooks/useBoard";
import Form from "../components/Form/Form";
import { Container, Title } from "./Style";
import Header from "../components/Header";

function Add() {
  const { title, setTitle, context, setContext, handleSubmit } = useBoard();

  return (
    <Container>
      <Header />
      <Title>게시물 추가</Title>
      <Form title={title} setTitle={setTitle} context={context} setContext={setContext} handleSubmit={handleSubmit} />
    </Container>
  );
}

export default Add;
