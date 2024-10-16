import React, { useState } from "react";
import { Container, Title } from "./Style";
import Header from "../components/Header";
import Input from "../components/Form/Input";

const API_URL = "http://localhost:3002/api";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("로그인 성공");
        localStorage.setItem("user-id", formData.email);
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
        <p>email</p>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        <p>password</p>
        <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <br />
        <Input id="submit" type="submit" value="로그인" />
      </form>
      <br />
      <button onClick={() => (window.location.href = "/sign-up")}>회원가입</button>
    </Container>
  );
}

export default SignIn;
