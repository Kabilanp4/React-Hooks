import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const TreeesContext = createContext();
export const useTrees = () => {
  useContext(TreeesContext);
};

const trees = [
  { id: "1", type: "useState" },
  { id: "2", type: "useEffect" },
  { id: "3", type: "useReducer" },
  { id: "4", type: "useRef" },
  { id: "5", type: "useContext" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TreeesContext.Provider value={{ trees }}>
    <App />
  </TreeesContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
