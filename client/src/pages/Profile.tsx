import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container.tsx";
import { Title } from "../components/Title.tsx";
import Header from "../components/Header.tsx";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-id")) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user-id");
    navigate("/signin");
  };

  return (
    <Container>
      <Header />
      <Title>프로필</Title>
      <p>email : {localStorage.getItem("user-id")}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </Container>
  );
};

export default Profile;
