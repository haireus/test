import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./Footer";

const Home = lazy(() => import("./pages/home"));
const TabStore = lazy(() => import("./pages/tabStore"));
const CategoryStore = lazy(() => import("./pages/categoryStore"));

export default function AppWrapper() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabStore" element={<TabStore />} />
        <Route path="/categoryStore" element={<CategoryStore />} />
      </Routes>
      <Footer />
    </>
  );
}
