import ScrollToTop from './ScrollToTop'
import { Outlet } from 'react-router'
import Nav from './components/Nav'
import Footer from './components/Footer'

function Layout() {

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet/>
      <Footer />
    </>  
  )
}

export default Layout