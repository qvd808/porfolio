import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import NavBar from "./NavBar";
import Projects from "./pages/Projects";
import MainPage from "./pages/MainPage";

export default function Home() {

  const location = useLocation();

  return (
    <>
      <NavBar />

      {/* <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white"> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/qvd-portfolio" element={<AboutMe />} />
          <Route exact path="/qvd-portfolio/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
      {/* </div> */}

    </>
  );
}
