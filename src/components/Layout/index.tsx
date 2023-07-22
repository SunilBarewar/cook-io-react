import Header from './Header'
import { Outlet } from 'react-router-dom'
import MobileNav from './MobileNav'
import Footer from './Footer'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <MobileNav />
        </>
    )
}

export default Layout