import axios from "axios";
import { Config } from './config';

//baseURL: "http://192.168.0.118:"+base_url+"/api",
//const base_url = "http://192.168.0.118:" + process.env.REST_URL_PORT + "/api"
//const base_url = 31356
//const base_url = process.env.REST_URL_PORT
//const base_url = process.env.DB_BACKEND_URL
//axios.defaults.baseURL = process.env.DB_BACKEND_URL
//axios.defaults.baseURL = "http://192.168.0.160/api"
axios.defaults.baseURL = Config.general.db_base_url;

export default axios.create({

//  apiHost={process.env.BASE_URL};
//  baseURL: "http://192.168.0.118:31356/api",
//  baseURL: base_url,
//  baseURL: "http://film-web-be-service.default.svc.cluster.local:8080/api",
//  baseURL: "http://192.168.0.160/api",
//  baseURL: "${process.env.DB_BACKEND_URL}",
  headers: {
    "Content-type": "application/json"
  }
});
