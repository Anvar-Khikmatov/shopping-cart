import  Layout from './Layout'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home",  element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ]
  }  
])

export default router