import React from 'react'
import "./home.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { IconContext } from "react-icons";

function home() {

  return (
    <div className="main-container">
      <h1> Victor Gustafsson </h1>
      <p> Software Developer </p>


      <div className="links-container">
        <a href="https://github.com/victorgson" className="icon">
          <IconContext.Provider value={{ style: { color: "white", height: "45px", width: "45px" } }}>
            <div>
              <IoLogoGithub />
            </div>
          </IconContext.Provider></a>
        <a href="https://www.linkedin.com/in/victorgustafsson/" className="icon">

          <IconContext.Provider value={{ style: { color: "white", height: "45px", width: "45px" } }}>
            <div>
              <IoLogoLinkedin />
            </div>
          </IconContext.Provider>
        </a>
      </div>
    </div >
  )
}

export default home
