import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./pages/Aboutme";
import NavBar from "./NavBar";
import Projects from "./pages/Projects";
import MainPage from "./pages/MainPage";

export default function Home() {

    const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route  path="/" element={<AboutMe />} />
          {/* <Route  path="/" element={<MainPage />} /> */}
          <Route  path="/projects" element={<Projects />} />
          {/* <Route  path="/about" element={<AboutMe />} /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}
