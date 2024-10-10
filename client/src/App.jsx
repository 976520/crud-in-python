import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import View from "./pages/View";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/View" element={<View />} />
    </Routes>
  );
}

export default App;
