import ReactDOM from "react-dom";
import "react-notifications/lib/notifications.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./reset.scss";
export const API_BASE_URL = "http://localhost:8080/api";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
