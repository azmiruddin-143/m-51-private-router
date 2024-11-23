import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Main Root/Root';
import Blog from './Components/Blog Page/Blog';
import Signup from './Components/SignUp Page/Signup';
import Signin from './Components/SignIn Page/Signin';
import Banner from './Components/Home Page/Banner';
import Authcontext from './Components/Auth Contect/Authcontext';
import Contact from './Components/Contact Page/Contact';
import Shop from './Components/Shop page/Shop';
import Order from './Components/Order Page/Order';
import Privet from './Components/Privet pages/Privet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='text-red-700 text-5xl'>404 Error Page</h1>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "signup",
        element: <Signup></Signup>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/shop",
        element: <Privet><Shop></Shop></Privet>
      },
      {
        path: "/order",
        element: <Privet><Order></Order></Privet>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Authcontext>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </Authcontext>
)
