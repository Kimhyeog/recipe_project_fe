import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import "./Login.css";

function Login() {
  return (
    <div className="LogIn-Page">
      <Header isLogIn={true} />
      <div className="Login-Contents">
        <form>
          <Link className="Login-logo" to={"/"}>
            오늘의 맛잘알
          </Link>
          <label>
            <p>아이디 :</p>
            <input name="id" type="text" />
          </label>
          <label>
            <p>비밀번호 :</p>
            <input name="password" type="password" />
          </label>
          <lable>
            <Button text={"로그인"} />
          </lable>
        </form>
      </div>
    </div>
  );
}

export default Login;
