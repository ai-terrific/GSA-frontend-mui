import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { routers } from '@/configs'
import MainLayout from '@/layout'
import Home from '@/pages/Home'

import PrivateRoute from './PrivateRoute'

const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Service = lazy(() => import('@/pages/Service'))
const Submission = lazy(() => import('@/pages/Submission'))
const CreateSubmission = lazy(() => import('@/pages/Submission/create'))
const Program = lazy(() => import('@/pages/Program'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: routers.Home,
        element: <Home />
      },
      {
        path: routers.Login,
        element: <Login />
      },
      {
        path: routers.Service,
        element: <Service />
      },
      {
        path: routers.PROGRAM,
        element: <Program />
      },
      {
        path: routers.Register,
        element: <Register />
      },
      {
        path: routers.NotFound,
        element: <NotFound />
      },
      {
        path: routers.SUBMISSION,
        element: <Submission />
      },
      {
        path: routers.SUBMISSION_CREATE,
        element: <CreateSubmission />
      }
    ]
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: routers.NotFound,
        element: <NotFound />
      }
    ]
  }
])

export default routes
