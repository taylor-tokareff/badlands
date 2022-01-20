import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <Link to="/about">About Me</Link>
    <Link to="/past">Past Projects</Link>
    <Link to="/current">Current Projects</Link>
    <Link to="/resume">Resume and Experience</Link>
    <Link to="/nerd">Nerd Stuff</Link>
    <Link to="/Peaches">Peaches!!!</Link>
    <Link to="/contact">Contact Me</Link>


  </div>
);

export default Menu;