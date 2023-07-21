import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import MobileNav from './MobileNav'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <MobileNav />
        </>
    )
}

export default Layout