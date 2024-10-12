import React, { useState } from "react";
import { Container, Title } from "./Style";
import Header from "../components/Header";
import Input from "../components/Form/Input";

const API_URL = "http://localhost:5000/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setError("");
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <Container>
      <Header />
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <p>password</p>
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p>confirm password</p>
        <Input
          type="password"
          placeholder="confirm password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br />
        <Input id="submit" type="submit" value="가입" />
      </form>
      {message && <p>{message}</p>}
    </Container>
  );
}

export default SignUp;
