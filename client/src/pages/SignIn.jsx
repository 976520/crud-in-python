import React from "react";
import { Container, Title } from "./Style";
import Header from "../components/Header";

function SignIn() {
  return (
    <Container>
      <Header />
      <Title>로그인</Title>
      <a href="http://localhost:3002/sign-up">회원가입</a>
    </Container>
  );
}

export default SignIn;
