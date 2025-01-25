import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

import Button from "./Button";
import Instructor from "./Instructor";

function Header({ isLogIn = false }) {
  const nav = useNavigate();

  return (
    <div className="Header">
      <div className="Header-Categories">
        <Link to={"/"} className="Header-Logo">
          <span className="Header-Logo">오늘의 맛잘알</span>
        </Link>
        <ul>
          <Link>
            <li>우리의 레시피</li>
          </Link>
          <Link>
            <li>우리의 주방</li>
          </Link>
          <Link>
            <li>우리의 조리도구</li>
          </Link>
          <Link>
            <li>우리의 조리재료</li>
          </Link>
        </ul>
        <Button
          type={"logIn"}
          text={"로그인·회원가입"}
          onClick={() => {
            nav("/login");
          }}
        />
      </div>
      {isLogIn ? null : <Instructor />}
    </div>
  );
}

export default Header;
