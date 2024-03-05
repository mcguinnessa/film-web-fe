import axios from "axios";

//baseURL: "http://192.168.0.118:"+base_url+"/api",
//const base_url = "http://192.168.0.118:" + process.env.REST_URL_PORT + "/api"
//const base_url = 31356
const base_url = process.env.REST_URL_PORT

export default axios.create({

//  apiHost={process.env.BASE_URL};
//  baseURL: "http://192.168.0.118:31356/api",
//  baseURL: base_url,
  baseURL: "http://film-web-be-service.default.svc.cluster.local:8080/api",
//  baseURL: "http://192.168.0.160/api",
  headers: {
    "Content-type": "application/json"
  }
});
