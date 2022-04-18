import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome To</p>
        <h1>Shreeji Technical Home Page</h1>
      </section>
    </>
  );
};
const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome To</p>
        <h1>Shreeji Technical About Page</h1>
      </section>
    </>
  );
};
const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome To</p>
        <h1>Shreeji Technical Service Page</h1>
      </section>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome To</p>
        <h1>Shreeji Technical Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}>  
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/service" element={<Service />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
      </Routes>
    </>
  );
};

export {Home , About , Service , Contact}; 
export default App;

