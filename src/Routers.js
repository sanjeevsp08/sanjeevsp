import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card1  from './Card1';
import {Card2} from './Card1';
import {Card3} from './Card1';
import {Card4} from './Card1';
import {Card5} from './Card1';
import {Card6} from './Card1';  
import {Card7} from './Card1';
import {Card8} from './Card1';
import {Card9} from './Card1';
import {Card10} from './Card1';

function Home() {
  return <div style={{ display: "flex",flexDirection: "row-around"}}>
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
    <Card5 />
    <Card6 />
    <Card7 />
    <Card8 />
    <Card9 />
    <Card10 />
    

     </div>
  
}

function About() {
  return <h2>storage=8GB,128GB </h2>;
}

function Contact() {
  return <h2>📞 center=080-4568243</h2>;
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;