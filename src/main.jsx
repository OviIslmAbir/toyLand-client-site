import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import ErrorPage from './Pages/Error/ErrorPage';
import Blogs from './Pages/Blogs/Blogs';
import ToyDetails from './Pages/ToyDetails/ToyDetails';
import PrivateRoute from './Routes/PrivateRoute';
import AddAToy from './Pages/AddAToy/AddAToy';
import MyToys from './Pages/MyToys/MyToys';
import AllToys from './Pages/AllToys/AllToys';
import UpdateMyToy from './Pages/UpdateMyToy/UpdateMyToy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addAToy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/updateMyToy/:id",
        element: <UpdateMyToy></UpdateMyToy>,
        loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
      },
      {
        path: "/marvelToyDetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/marvelToys/${params.id}`)
      },
      {
        path: "/transformerToyDetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/transformerToys/${params.id}`)
      },
      {
        path: "/starToyDetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/starToys/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
          <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
