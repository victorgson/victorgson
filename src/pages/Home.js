import React, { useState } from "react";
import "./home.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

import victor from "../assets/victor.png";


function Home() {
  const [activeItem, setActiveItem] = useState(0);

  const menuItems = [
    {
      name: 'About',
      url: '#',
      key: 0,
    },
    {
      name: 'Skills',
      url: '#',
      key: 1
    },
    {
      name: 'Socials',
      url: '#',
      key: 2,
    }
  ]

  let handleOnClick = (index) => {
    setActiveItem(index)
  }

  return (
    <>
      <div className="main-container">
        <h1 className="hero-title"> Victor Gustafsson </h1>
        <h2 className="hero-subtitle"> Junior Software Developer </h2>

        <div className="profile-image">
          <img src={victor} alt="victor" />
        </div>

        <div className="links-container">
          <a
            href="https://github.com/victorgson"
            className="icon"
            target="_blank"
            rel="noreferrer"
          >


            <IconContext.Provider
              value={{
                style: { color: "white", height: "45px", width: "45px" },
              }}
            >
              <div>
                <IoLogoGithub />
              </div>
            </IconContext.Provider>
          </a>
          <a
            href="https://www.linkedin.com/in/victorgustafsson/"
            className="icon"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{
                style: { color: "white", height: "45px", width: "45px" },
              }}
            >
              <div>
                <IoLogoLinkedin />
              </div>
            </IconContext.Provider>
          </a>
        </div>

        <Link to="/projects"> Projects</Link>
      </div>
      <section className="about">
        <h1> About Me </h1>

        <nav>
          <ul className="nav">
            {
              menuItems.map((item, i) => {
                return (
                  <li key={item.key} className={`nav-item ${activeItem === i ? "nav-item-active" : null}`}
                    onClick={() => {
                      handleOnClick(i)
                    }}> {item.name}
                  </li>
                )
              })
            }

          </ul>
        </nav>

        <div>
          <img src="" />
        </div>
      </section>

      <section className="portfolio">
        <h1> Portfolio </h1>

      </section>
      <footer>
        <p> © 2022 Victor Gustafsson. All rights reserved </p>
      </footer>


    </>
  );
}

export default Home;
