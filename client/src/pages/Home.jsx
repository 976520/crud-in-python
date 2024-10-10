import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Form from "../components/Form/Form";
import BoardTable from "../components/Table/BoardTable";

const API_URL = "http://localhost:5000/api";

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
  const [board, setBoard] = useState([]);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  useEffect(() => {
    fetchBoard();
  }, []);

  const fetchBoard = async () => {
    const response = await axios.get(`${API_URL}/board`);
    setBoard(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/add`, { title, context });
    setTitle("");
    setContext("");
    fetchBoard();
  };

  return (
    <Container>
      <Title>나도 이제 백엔드?</Title>
      <h4>add</h4>
      <Form title={title} setTitle={setTitle} context={context} setContext={setContext} handleSubmit={handleSubmit} />
      <h4>view</h4>
      <BoardTable board={board} />
    </Container>
  );
}

export default Home;
