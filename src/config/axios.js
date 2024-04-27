import axios from "axios";
// import { toast } from "react-hot-toast";

// axios.interceptors.request.use(async (request) => {
//   const { token } = JSON.parse(
//     localStorage.getItem("user") || JSON.stringify({ token: "" })
//   );

//   if (
//     !token &&
//     !request?.url?.includes("login") &&
//     !request?.url?.includes("signup") &&
//     !request?.url?.includes("password-reset") &&
//     !request?.url?.includes("create-password")
//   ) {
//     window.location.href = "/";
//     return;
//   }
// });

export default axios;
