import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./pages/Aboutme";
import NavBar from "./NavBar";

export default function Home() {


  return (
    <BrowserRouter>
    <NavBar/>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
