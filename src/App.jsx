import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import PiedDePage from './components/PiedDePage.jsx'
import Accueil from './pages/Accueil.jsx'
import './App.css'

// Remonte en haut de page à chaque changement de page (sauf ancre #…).
function RemonterEnHaut() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <RemonterEnHaut />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>
      <PiedDePage />
    </>
  )
}
