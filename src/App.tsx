import './App.css';
import Navbar from "./components/Navbar";
import React from "react";
import Simple from "./components/Simple";
import Hex from "./components/Hex";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>,
      children: [
        {
          path: '/simple',
          element: <Simple/>
        },
        {
          path: '/hex',
          element: <Hex/>
        }
      ]
    }
  ]);

  return (
      <RouterProvider router={router}/>
  );
}
