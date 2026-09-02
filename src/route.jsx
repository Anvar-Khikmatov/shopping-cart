import  Layout from './Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
// import { createBrowserRouter } from 'react-router-dom'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home",  element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ]
  }  
])

export default router