import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "./../store/login/loginSlice";
import { incrementAsync, decrementAsync } from "../store/login/loginActions";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(
    (state: { loginSlice: { value: string } }) => state.loginSlice.value
  );

  const handleIncrementAsync = () => {
    // dispatch({ type: "counter/incrementAsync" });
    dispatch(incrementAsync());
  };

  const handleDecrementAsync = () => {
    // dispatch({ type: "counter/decrementAsync" });
    dispatch(decrementAsync());
  };

  return (
    <div>
      <h1>Counter Value{counter}</h1>
      <button onClick={handleIncrementAsync} className="btn btn-primary">
        Increment Async
      </button>
      <button onClick={handleDecrementAsync} className="btn btn-success">
        Decrement Async
      </button>
    </div>
  );
}

export default Counter;
