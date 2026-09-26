import ScrollToTop from './ScrollToTop'
import { Outlet } from 'react-router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { CartProvider } from './CartContext'

function Layout() {

  return (
    <>
      <CartProvider>
        <ScrollToTop />
        <Nav />
        <Outlet />
        <Footer />
      </CartProvider>
    </>  
  )
}

export default Layout