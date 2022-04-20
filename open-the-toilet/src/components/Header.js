import { Link } from "react-router-dom";

import logo from "../images/logo.png";

function Header() {
  return (
    <header id="header" className="header">
      <h1>
        <Link to="/">
          <img src={logo} alt="로고이미지" />
        </Link>
      </h1>
      <nav id="gnb">
        <ul>
          <li>
            <Link to="/" className="day">
              로그인
            </Link>
          </li>
          <li>
            <Link to="/" className="voca">
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
