import React, { useState } from "react";
import { Container, Title } from "../style/Style.js";
import Header from "../components/Header.js";
import Input from "../components/Form/Input.js";
import { authService } from "../services/AuthService.tsx";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== passwordConfirm) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    setMessage("");

    try {
      const data = await authService(formData, "signup");
      if (data.success) {
        alert("회원가입 성공");
        window.location.href = "/signin";
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <Container>
      <Header />
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <Input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required />
        <p>password</p>
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p>confirm password</p>
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="confirm password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        {message && <p style={{ color: "red" }}>{message}</p>}
        <br />
        <Input id="submit" type="submit" value="가입" />
      </form>
    </Container>
  );
}

export default SignUp;
