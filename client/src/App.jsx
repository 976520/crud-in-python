import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Form = styled.form`
  margin: 20px 0;
`;

const Input = styled.input`
  margin: 5px 0;
`;

const TextArea = styled.textarea`
  margin: 5px 0;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 600px;
  margin: 0 auto;
  word-break: break-all;
  table-layout: fixed;
`;

const TableHeader = styled.th`
  border: 1px solid #000;
  padding: 8px;
`;

const TableCell = styled.td`
  border: 1px solid #000;
  padding: 8px;
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
