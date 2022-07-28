import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const [isHoverHello, setIsHoverHello] = useState(false);
  const [isHoverIm, setIsHoverIm] = useState(false);
  const [isHoverLu, setIsHoverLu] = useState(false);

  const helloTextStyle = {
    display: "flex",
    marginLeft: isHoverHello ? "6rem" : "0rem",
    fontSize: "14rem",
    fontWeight: "Bold",
    transition: "250ms",
    marginBottom: "-1rem",
  };

  const luTextStyle = {
    display: "flex",
    marginLeft: isHoverLu ? "7rem" : "0rem",
    fontSize: "14rem",
    fontWeight: "Bold",
    transition: "250ms",
    marginBottom: "-1rem",
  };

  const imTextStyle = {
    display: "flex",
    marginLeft: isHoverIm ? "8rem" : "0rem",
    fontSize: "14rem",
    fontWeight: "Bold",
    transition: "250ms",
    marginBottom: "-1rem",
  };

  function changeHelloText(e) {
    setIsHoverHello(true);
    e.target.innerHTML = "Info";
  }

  function revertHelloText(e) {
    setIsHoverHello(false);
    e.target.innerHTML = "Hello,";
  }

  function changeImText(e) {
    setIsHoverIm(true);
    e.target.innerHTML = "Work";
  }

  function revertImText(e) {
    setIsHoverIm(false);
    e.target.innerHTML = "I'm";
  }

  function changeLuText(e) {
    setIsHoverLu(true);
    e.target.innerHTML = "Contact";
  }

  function revertLuText(e) {
    setIsHoverLu(false);
    e.target.innerHTML = "Lu.";
  }

  return (
    <div className="Landing">
      <div className="Landing-links">
        <ul className="Landing-ul">
          <li>
            <NavLink
              style={helloTextStyle}
              onMouseOver={changeHelloText}
              onMouseLeave={revertHelloText}
              className="Landing-hello"
              activeClassName="helloIsActive"
              to="/info"
            >
              <h1>Hello,</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={imTextStyle}
              onMouseOver={changeImText}
              onMouseLeave={revertImText}
              className="Landing-im"
              activeClassName="imIsActive"
              to="/work"
            >
              <h1>I'm</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={luTextStyle}
              onMouseOver={changeLuText}
              onMouseLeave={revertLuText}
              className="Landing-lu"
              activeClassName="luIsActive"
              to="/contact"
            >
              <h1>Lu.</h1>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Landing-img">
        <img
          className="Landing-img-photo"
          src="https://drive.google.com/uc?export=download&id=1w7TOnoGHew-oghO2EzQg6Eft31jclsgi"
          alt="Lu Portrait"
        />
      </div>
    </div>
  );
};

export default Landing;
