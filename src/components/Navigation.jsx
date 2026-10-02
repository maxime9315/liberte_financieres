import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/liberte.jpeg'
import FenetreContact from './FenetreContact.jsx'

export default function Navigation() {
  const [contact, setContact] = useState(false)

  return (
    <header className="nav">
      <div className="conteneur nav__inner">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="" />
          <span>Liberté Financière</span>
        </Link>
        <nav className="nav__liens">
          <NavLink to="/" end>Accueil</NavLink>
          <Link to="/#formules">Nos cartes</Link>
        </nav>
        <div className="nav__actions">
          <a
            href="https://chat.whatsapp.com/LENf5pU13KiAKoZHa3NAqI?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--rouge btn--petit"
          >
            Intégrez le groupe
          </a>
        </div>
      </div>
      {contact && <FenetreContact onFermer={() => setContact(false)} />}
    </header>
  )
}
