import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GridContext } from "../src/components/GridContext.jsx";
import { store } from "./modules/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GridContext>
        <App />
      </GridContext>
    </Provider>
  </React.StrictMode>
);
