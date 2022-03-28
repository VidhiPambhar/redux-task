import axios from "axios";

// axios instance for making requests
const axiosInstance = axios.create({
  baseURL: "  http://api.torrent.dev.drcsystems.com/api",
});
// const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  // console.log(config);
  if (
    config.url !== "/Login/Login" &&
    config.url !== "/Login/LogOutLog"
  )
    config.headers["Authorization"] =
      "Bearer " + JSON.parse(localStorage.getItem("Token"));
  return config;
});

export default axiosInstance;
