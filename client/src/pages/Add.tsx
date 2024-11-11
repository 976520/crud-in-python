import React, { useEffect } from "react";
import useBoard from "../hooks/useBoard.tsx";
import BoardForm from "../components/Form/BoardForm.tsx";
import { Container } from "../components/Container.tsx";
import { Title } from "../components/Title.tsx";
import Header from "../components/Header.tsx";

const Add: React.FC = () => {
  const { title, setTitle, context, setContext, writer, setWriter, handleSubmit } = useBoard();

  useEffect(() => {
    const currentUser = localStorage.getItem("user-id");
    if (currentUser) {
      setWriter(currentUser);
    }
  }, [setWriter]);

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
