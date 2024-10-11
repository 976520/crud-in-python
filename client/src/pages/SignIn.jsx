import React, { useState } from "react";
import { Container, Title } from "./Style";
import Header from "../components/Header";
import styled from "styled-components";

export const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #b0b0b0, inset -4px -4px 8px #ffffff;
`;

const API_URL = "http://localhost:5000/api";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        alert("로그인 성공");
        localStorage.setItem("user-id", email);
        window.location.href = "/home";
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <Container>
      <Header />
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        {" "}
        <Input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
      <a href="http://localhost:3002/sign-up">회원가입</a>
    </Container>
  );
}

export default SignIn;
