import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js"; //.js는 생략 가능
// import reportWebVitals from './reportWebVitals'; 필요 없음

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
//app을 찾아서 root에 랜더링을 해라
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

