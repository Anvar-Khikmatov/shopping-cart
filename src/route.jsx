import  Layout from './Layout'
import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductDetail from './components/ProductDetail'
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
      { path: "/collection", element: <Collection /> },
      { path: "/collection/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ]
  }  
])

export default router