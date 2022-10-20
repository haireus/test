import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Modal from "./components/modal";
import Footer from "./Footer";
import Spin from "./loading";

const Home = lazy(() => import("./pages/home"));
const TabStore = lazy(() => import("./pages/tabStore"));
const CategoryStore = lazy(() => import("./pages/categoryStore"));

export default function AppWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 2000);
  };
  return (
    <>
      <Header />

      <button className={"primaryBtn"} onClick={handleLoading}>
        Open Modal
      </button>
      {isLoading && <Spin />}
      {/* <Spin /> */}
      {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}

      <Modal setIsOpen={setIsOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabStore" element={<TabStore />} />
        <Route path="/categoryStore" element={<CategoryStore />} />
      </Routes>
      <Footer />
    </>
  );
}
