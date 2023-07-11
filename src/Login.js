import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import LoginImg from "./component/login.jpeg";
export default function Login(props) {
  const history = useNavigate();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/website");
          } else if (res.data === "notexist") {
            alert("User is not registered or password is wrong");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="login--page">
        <img src={LoginImg} id="login" alt="login" />

        <div id="cover">
          <h2>Login</h2>

          <form className="login--form" action="POST">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="********.com"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="************"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button type="submit" onClick={submit}>
              Log In
            </button>
          </form>
          <Link to="/register">
            <button className="link--btn">
              Don't have an account? Register here.
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
