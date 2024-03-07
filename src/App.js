import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return(
    <main className="min-h-screen bg-zinc-900 scroll-smooth">
      <Navigation/>
      <Home/>
      <About />
      <Skills/>
      <Projects/>
      <Resume/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer />
    </main>
  )
}