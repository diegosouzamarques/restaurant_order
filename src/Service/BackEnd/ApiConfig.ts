import axios from "axios";

const ApiConfig = axios.create({
    //baseURL: "http://localhost:1020/api/",
    baseURL: "https://localhost:7292/api/",
    headers:{
        "Content-Type":"application/json",
    },
    timeout: 10000
});

export default ApiConfig;