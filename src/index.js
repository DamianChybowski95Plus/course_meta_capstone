import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'views/MainLayout';
import About from 'views/MainLayout/About';
import Menu from 'views/MainLayout/Menu';
import Reservations from 'views/MainLayout/Reservations';
import OderOnline from 'views/MainLayout/OrderOnline';
import Login from 'views/MainLayout/Login';
import Home from 'views/MainLayout/Home';
import { StateManager, StateProvider } from 'Contexts';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <MainLayout/>,
    children : [
      {
        path : "home",
        element : <MainLayout/>
      },
      {
        path: "about",
        element : <About/>
      },
      {
        path: "menu",
        element : <Menu/>
      },
      {
        path: "reservations",
        element : <Reservations/>
      },
      {
        path: "orderOnline",
        element: <OderOnline/>
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider router={router}/>
      </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
