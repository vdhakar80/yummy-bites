import React, { useEffect, useMemo, useRef, useState } from "react";
import yummyBitesLogo from "../assets/images/yummyBitesLogo.png";
import "./../assets/css/login.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../store/login/loginActions";
import { useSelector } from "react-redux";
import { LoginState } from "../store/login/loginTypes";

const list = [
  "Hungry?",
  "Unexpected guests?",
  "Movie marathon?",
  "Cooking gone wrong?",
  "Late Night at Office?",
  "Game Night?",
];

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(
    (state: { loginSlice: LoginState }) => state.loginSlice.error
  );
  const token = useSelector(
    (state: { loginSlice: LoginState }) => state.loginSlice.token
  );
  console.log("inside login", error, "|", token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mood, setMood] = useState("Hungry?");
  const counter = useRef(0);
  console.log("counter", counter);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter.current >= list.length - 1) {
        counter.current = 0;
        setMood(list[counter.current]);
      } else {
        counter.current = counter.current + 1;
        setMood(list[counter.current]);
      }
      //   counter.current = 1;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, error]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(`email:${email}\n password:${password} `);
    dispatch(loginAsync({ emailId: email, password: password }));
    // navigate("/");
  };
  return (
    <>
      <div className="loginPage d-flex justify-content-between align-items-center me-4 ms-2">
        <div className="loginLeftText">
          <h1>{mood}</h1>
          {/* <h1>Hungry?</h1> */}
          <h3>Order food from your favourite Yummy Bites.</h3>
        </div>
        <div>
          <img src={yummyBitesLogo} height={400} width={400} />
        </div>
        <div>
          <div className="loginCard card">
            <div className="loginHeading">Sign In</div>
            <div>
              <form onSubmit={onSubmitHandler}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <div>
                  <Link className="forgot-password" to={"/forgotPassword"}>
                    Forgot Password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </form>
              <div style={{ color: "red" }}>{error}</div>
              <div>{token}</div>
              <div className="text-center">
                <div>Don't have Accout?</div>
                <Link className="forgot-password" to={"/register"}>
                  Sign Up Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
