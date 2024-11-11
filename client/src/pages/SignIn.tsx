import React, { useState } from "react";
import { Container } from "../components/Container.tsx";
import { Title } from "../components/Title.tsx";
import Header from "../components/Header.tsx";
import Input from "../components/Form/Input.tsx";
import { authService } from "../services/AuthService.tsx";

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

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
      const data = await authService(formData, "signin");
      if (data.success) {
        alert("로그인 성공");
        localStorage.setItem("user-id", formData.email);
        window.location.href = "/home";
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Container>
      <Header />
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <Input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required />
        <br />
        <p>password</p>
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <Input id="submit" type="submit" value="로그인" />
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <br />
      <button onClick={() => (window.location.href = "/signup")}>회원가입</button>
    </Container>
  );
};

export default SignIn;
