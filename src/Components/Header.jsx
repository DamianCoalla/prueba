import React from "react";
import sun from "../assets/icon-sun.svg";
import "./Header.css";
import moon from "../assets/icon-moon.svg";

function Header(props) {
  const onClick = () => {
    props.setChangeMode(!props.changeMode);
  };

  return (
    <div className={props.changeMode ? "headerLight" : "headerDark"}>
      <h1 className="title">TO DO</h1>
      <button className="boton" onClick={onClick}>
        <img src={props.changeMode ? sun : moon} alt="" />
      </button>
    </div>
  );
}

export default Header;
