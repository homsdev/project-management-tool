import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Backlog from "./pages/Backlog/Backlog";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./pages/Board/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: null
      },
      {
        path: "/backlog",
        element: <Backlog />,
      },
      {
        path: "/board",
        element: <Board />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
