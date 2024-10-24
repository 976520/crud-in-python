import React, { useState } from "react";
import { Container, Title } from "../style/Style";
import Header from "../components/Header";
import Input from "../components/Form/Input";
import { authService } from "../services/AuthService";

function SignUp() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
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

    if (formData.password !== formData.passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setError("");
    try {
      const data = await authService(formData, "signup");
      setMessage(data.message);
    } catch (error) {
      setError("회원가입 중 오류가 발생했습니다.");
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
          value={formData.passwordConfirm}
          onChange={handleChange}
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
