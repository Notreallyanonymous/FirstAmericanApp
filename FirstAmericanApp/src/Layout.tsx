import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar.tsx'
import MainMenu from './components/MainMenu.tsx'

import Footer from './components/Footer.tsx'
import './App.css'

function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
      
  )
}

export default Layout
