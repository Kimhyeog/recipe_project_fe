import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import "./Login.css";
import { useContext, useState } from "react";
import { MemberStateContext } from "../App";

function Login() {
  const members = useContext(MemberStateContext);

  // State to store user input
  const [credentials, setCredentials] = useState({
    id: "",
    password: "",
  });

  // Handler to track input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  // Handler for login button click
  const onClickLogIn = () => {
    const matchedMember = members.find(
      (member) =>
        member.user_ID === credentials.id &&
        member.user_password === credentials.password
    );

    if (matchedMember) {
      alert("로그인 성공");
    } else {
      alert("너 누구야!");
    }
  };

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
            <input
              name="id"
              type="text"
              value={credentials.id}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <p>비밀번호 :</p>
            <input
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <Button onClick={onClickLogIn} text={"로그인"} />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login;
