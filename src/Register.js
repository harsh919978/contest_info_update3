import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import LoginImg from "./component/login.jpeg";
export default function Register(props) {
  const history = useNavigate();
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/register", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Email is already Registered");
          } else if (res.data === "notexist") {
            // alert("User is not Registered");
            history("/");
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
          <h2>Register</h2>
          <form className="register--form" action="POST">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="Enter full name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="********.com"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="************"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button onClick={submit}>Sign up</button>
          </form>
          <Link to="/">
            <button className="link--btn">
              Already have an account? Login here.
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
