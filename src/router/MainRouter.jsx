import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Item } from "../pages";
import { NavBar } from "../components";
export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};
