import {createBrowserRouter} from 'react-router-dom'
import Root from '../routes/root'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [],
      },
    ],
  },

  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
        children: [],
      },

      {
        path: '/auth/register',
        element: <Register />,
        children: [],
      },
    ],
  },
])
