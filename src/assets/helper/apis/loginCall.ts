import axios from "axios";

const loginPostCall = 
() => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:5000/user/login",
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
export default loginPostCall;
