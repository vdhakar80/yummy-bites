import React, { useEffect, useMemo, useRef, useState } from "react";
import yummyBitesLogo from "../assets/images/yummyBitesLogo.png";
import "./../assets/css/register.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../store/login/loginActions";
import { useSelector } from "react-redux";
import { LoginState } from "../store/login/loginTypes";
import { registerDataAsync } from "../store/register/registerActions";
import { registerState } from "../store/register/registerTypes";
import { toast } from "react-toastify";

const list = [
  "Hungry?",
  "Unexpected guests?",
  "Movie marathon?",
  "Cooking gone wrong?",
  "Late Night at Office?",
  "Game Night?",
];

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(
    (state: { registerSlice: registerState }) => state.registerSlice.error
  );
  const success = useSelector(
    (state: { registerSlice: registerState }) => state.registerSlice.success
  );

  console.log("inside login", error, "|", success);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pageNumber, setPageNumber] = useState("first");

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
    if (success) {
      // toast.success("User Registered Successfully", {
      //   position: "bottom-right",
      // });
      navigate("/");
    }
  }, [success, error]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(`email:${email}\n password:${password} `);
    if (pageNumber === "first") {
      setPageNumber("second");
    } else {
      dispatch(
        registerDataAsync({
          name: name,
          emailId: email,
          password: password,
          userId: "",
          contactNo: mobile,
          orders: [],
          address: address,
          city: city,
          state: state,
          country: country,
          profilePicture: "",
        })
      );
    }

    // navigate("/");
  };
  return (
    <div className="registerPage d-flex justify-content-between align-items-center me-4 ms-2">
      <div className="registerLeftText">
        <h1>{mood}</h1>
        {/* <h1>Hungry?</h1> */}
        <h3>Order food from your favourite Yummy Bites.</h3>
      </div>
      <div>
        <img src={yummyBitesLogo} height={400} width={400} />
      </div>
      <div>
        <div className="registerCard card">
          <div className="registerHeading">Sign Up</div>
          <div>
            <form onSubmit={onSubmitHandler}>
              {pageNumber === "first" && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    type="number"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    autoComplete="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    // autoComplete="current-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </>
              )}
              {pageNumber === "second" && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    autoComplete="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="country"
                    label="Country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </>
              )}
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {pageNumber == "first" ? "Next" : "Sign Up"}
              </Button>
            </form>
            <div style={{ color: "red" }}>{error}</div>
            <div>{success}</div>
            <div className="text-center">
              <div>Already have Account?</div>
              <Link className="forgot-password" to={"/login"}>
                Sign In Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
