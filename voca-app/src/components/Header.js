// import { useState } from "react";
import { Link } from "react-router-dom"; //npm i react-router-dom 설치 해야 작동
function Header() {
  return (
    <header id="header" className="header">
      <h1>
        <Link to="/">Today Voca</Link>
      </h1>
      <nav id="menu">
        <ul>
          <li>
            <Link to="/insert/day" className="day">
              ADD DAY
            </Link>
          </li>
          <li>
            <Link to="/insert/voca" className="voca">
              ADD VOCA
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
