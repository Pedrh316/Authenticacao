import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { verifyToken } from './useCases/verifyToken'
import { loginRoute, registerRoute } from './utils/APIRoutes'
import { authenticate } from './useCases/authenticate'
import Login from './routes/Login'
import Register from './routes/Register'
import Home from './routes/Home'
import Root from './routes/Root'
import NotFound from './routes/NotFound'
import PrivateRoot from './routes/PrivateRoot'
import PublicRoot from './routes/PublicRoot'
import Unauthorized from './components/Unauthorized'
import About from './routes/About'


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children: [
            {
                element:<PublicRoot/>,
                loader:verifyToken().unvalidated,
                errorElement:<Unauthorized to="/" title="página inicial"/>,
                children:[
                    {
                        path:'login',
                        element:<Login/>,
                        action:({request}) => authenticate(request, loginRoute),
                    },
                    {
                        path:'register',
                        element:<Register/>,
                        action:({request}) => authenticate(request, registerRoute),
                    },
                ]
            },
            {
                element:<PrivateRoot/>,
                loader:verifyToken().validated,
                errorElement:<Unauthorized to="/login" title="página de login"/>,
                children:[
                    {
                        index:true,
                        path:'/',
                        element:<Home/>
                    },
                    {                      
                        path:'/about',
                        element:<About/>
                    },
                ]
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App