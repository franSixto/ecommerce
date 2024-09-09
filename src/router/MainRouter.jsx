import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Item } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};