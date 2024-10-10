import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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

const Form = styled.form`
  margin: 20px 0;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #b0b0b0, inset -4px -4px 8px #ffffff;
`;

const TextArea = styled.textarea`
  margin: 5px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #b0b0b0, inset -4px -4px 8px #ffffff;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 600px;
  margin: 0 auto;
  word-break: break-all;
  table-layout: fixed;
`;

const TableHeader = styled.th`
  border: none;
  padding: 8px;
  background: #e0e0e0;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #b0b0b0, -4px -4px 8px #ffffff;
`;

const TableCell = styled.td`
  border: none;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #b0b0b0, -4px -4px 8px #ffffff;
`;

function App() {
  const [board, setBoard] = useState([]);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  useEffect(() => {
    fetchBoard();
  }, []);

  const fetchBoard = async () => {
    const response = await axios.get("http://localhost:5000/api/board");
    setBoard(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/add", { title, context });
    setTitle("");
    setContext("");
    fetchBoard();
  };

  return (
    <Container>
      <Title>나도 이제 백엔드?</Title>
      <h4>add</h4>
      <Form onSubmit={handleSubmit}>
        <p>title</p>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>context</p>
        <TextArea value={context} onChange={(e) => setContext(e.target.value)}></TextArea>
        <Input type="submit" value="submit" />
      </Form>
      <h4>view</h4>
      <Table>
        <thead>
          <tr>
            <TableHeader width="5%">No.</TableHeader>
            <TableHeader width="15%">Title</TableHeader>
            <TableHeader width="35%">Context</TableHeader>
          </tr>
        </thead>
        <tbody>
          {board.map((row, index) => (
            <tr key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
