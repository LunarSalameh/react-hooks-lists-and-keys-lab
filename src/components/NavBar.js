import React from "react";
import Links from "./Links";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home" key={Links[0]}>Home</a>
    <a href="#about" key={Links[1]}>About</a>    
    <a href="#projects" key={Links[2]}>Projects</a>    
  </nav>;
}

export default NavBar;
