import { IconeBouclier } from './Icones.jsx'

export default function PiedDePage() {
  return (
    <footer className="pied">
      <div className="conteneur">
        <div className="pied__bas">
          <span className="pied__secu"><IconeBouclier width={16} height={16} /> Données chiffrées de bout en bout</span>
          <nav>
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Tarifs</a>
            <span>© 2026 Liberté Financière</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}
