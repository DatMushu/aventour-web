import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Cotizar from "./components/Cotizar";
import Tours from "./components/Tours";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Servicios />
      <Cotizar />
      <Tours />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;