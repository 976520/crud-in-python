import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import View from "./pages/View";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

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
