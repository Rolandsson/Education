import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import ActivityPage from './components/activity'
import ContactPage from './components/contact'

import './app.css'
import './style/medium.css'
import './style/large.css'

function AppHeader(props) {
  return (
    <header className="page-header">
      <h1> {props.title} </h1>
      <p> {props.subtitle} </p>
    </header>
  )
}



function AppNavigation(props) {
  return (
    <nav className="page-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Index</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''}>Kontakt</NavLink>
        </li>
        <li className="nav-item"></li>
      </ul>
    </nav>
  )
}

function AppFooter(props) {
  return (
    <footer className="page-footer">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, exercitationem.
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <AppHeader
        title="Nickstabadet"
        subtitle="Där kul aldrig tar slut" />
      <BrowserRouter>
        <AppNavigation />
        <Routes>
          <Route path="/" element={<ActivityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <AppFooter />
    </div>
    )
}
