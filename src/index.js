import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/frame/app/App";
import "lib-flexible";
import "./assets/css/common.less";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
