import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Footer/footer";
import Home from "../Home/home";
import NavBar from "../Navbar/navbar";
import Site from "../Productos/site";
import ContactForm from "../Contacto/Contact";

const Rutas = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Site />} />
        <Route path="/contact" element={<ContactForm />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Rutas;
