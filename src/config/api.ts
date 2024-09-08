import axios from "axios";

const api = axios.create({
    baseURL: "http://14.225.217.207:8081/api/",
  });
   api.interceptors.request.use(
    function (config){
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    
  , function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
  
 export default api;