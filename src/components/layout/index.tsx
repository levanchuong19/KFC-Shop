import { Outlet } from "react-router-dom"
import Header from "../header"
import Footer from "../footer"
import Order from "../order"



function Layout() {
  return (
    <>
    <Header/>
    <Order/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout