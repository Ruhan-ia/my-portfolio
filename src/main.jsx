import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import About from './Components/Home/About/About.jsx';
import Skills from './Components/Home/Skills/Skills.jsx';
import Projects from './Components/Home/Projects/Projects.jsx';
import Contact from './Components/Home/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/skills',
        element:<Skills></Skills>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div>
<RouterProvider router={router} />

</div>
  </React.StrictMode>,
)
