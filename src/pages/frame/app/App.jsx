import React from "react";
import { HashRouter } from "react-router-dom";
import MyRoutes from "@/routes";
import "./App.less";

const App = () => {
    return (
        <HashRouter>
            <MyRoutes />
        </HashRouter>
    );
};

export default App;
