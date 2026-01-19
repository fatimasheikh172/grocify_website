import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/sea";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";

const App = () => {

  const router = createBrowserRouter([  
    {
      path: "/",
      element: <Layout />,
      children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Fruits",
      element : <Fruits />
    },
    {
      path: "/Dairy",
      element: <Dairy />
    },
    {
      path: "/SeaFood",
      element: <SeaFood />
    },
    {
      path: "/AllProducts",
      element : <AllProducts />
    }
    ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;