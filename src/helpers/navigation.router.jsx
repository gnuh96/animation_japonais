import {createBrowserRouter} from 'react-router-dom'
import Root from '../routes/root'
import Home from '../pages/Home/Home'
import Auth from '../routes/auth'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Intrucstion from '../pages/Intrustion/Intrucstion'
import DetailProject from '../pages/DetailProjet/DetailProjet'

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
      {
        path: '/intrucstion',
        element: <Intrucstion />,
        children: [],
      },
      {
        path: '/detail/:id',
        element: <DetailProject />,
        children: [],
      },
    ],
  },

  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
  },
])
