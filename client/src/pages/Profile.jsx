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

  return (
    <Container>
      <Header />
      <Title>프로필</Title>
      <p>email : {localStorage.getItem("user-id")}</p>
    </Container>
  );
}

export default Profile;
