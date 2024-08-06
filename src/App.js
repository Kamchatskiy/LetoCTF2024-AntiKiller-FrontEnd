import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Tasks } from "./pages/tasks";
import { Rating } from "@mui/material";
import "./style.css"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="tasks" element={<Tasks />} />
          <Route path="rating" element={<Rating />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
