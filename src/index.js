import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

import App from "./App";


axios.interceptors.request.use(request => {
   console.log(request);
   return request;
}, error => {
   console.log(error);
   return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

const container = document.getElementById("root");
const root = createRoot(container);



root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
