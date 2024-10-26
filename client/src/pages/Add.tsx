import React from "react";
import useBoard from "../hooks/useBoard";
import BoardForm from "../components/Form/BoardForm";
import { Container, Title } from "../style/Style";
import Header from "../components/Header";

const Add: React.FC = () => {
  const { title, setTitle, context, setContext, handleSubmit } = useBoard();

  return (
    <Container>
      <Header />
      <Title>게시물 추가</Title>
      <BoardForm
        title={title}
        setTitle={setTitle}
        context={context}
        setContext={setContext}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Add;
