import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title } from "./Style";
import Header from "../components/Header";

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-id")) {
      navigate("/sign-in");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user-id");
    navigate("/sign-in");
  };

  return (
    <Container>
      <Header />
      <Title>프로필</Title>
      <p>email : {localStorage.getItem("user-id")}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </Container>
  );
}

export default Profile;
