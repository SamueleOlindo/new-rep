import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Accounts from "./pages/Accounts";
import SingleAccount from "./pages/SingleAccount";



const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/accounts',
    element: <Accounts/>
  },
  {
    path: '/accounts/:name',
    element: <SingleAccount/>
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
