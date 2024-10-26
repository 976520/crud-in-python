import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Add from "./pages/Add.tsx";
import View from "./pages/View.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/view" element={<View />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
