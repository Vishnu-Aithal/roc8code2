import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/MyRoutes";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MyRoutes />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
