import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/liberte.jpeg'
import CarteVisuelle from '../components/CarteVisuelle.jsx'
import FenetreCommande from '../components/FenetreCommande.jsx'
import {
  IconeCasque,
  IconeCheck,
  IconeBouclier,
  IconeEclair,
  IconeFleche,
  IconePortefeuille,
} from '../components/Icones.jsx'
import { FORMULES, formatEur } from '../data/formules.jsx'

const ATOUTS = [
  { icone: IconeEclair, titre: 'Ouverture en ligne', texte: 'Vérification' },
  { icone: IconeBouclier, titre: 'Fonds protégés', texte: 'Par vos code personnels' },
  { icone: IconePortefeuille, titre: 'Zéro découvert', texte: "dépensez jusqu'au plafond" },
  { icone: IconeCasque, titre: 'Support 7j/7', texte: 'Une équipe joignable par chat' },
]

function LienCommande({ formule, className, children }) {
  const [ouverte, setOuverte] = useState(false)

  return (
    <>
      <button type="button" className={className} onClick={() => setOuverte(true)}>
        {children}
      </button>
      {ouverte && <FenetreCommande formule={formule} onFermer={() => setOuverte(false)} />}
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="conteneur hero__inner">
        <span className="pastille">
          <img src={logo} alt="" /> Cartes Blanches & prosperite financiere.
        </span>
        <h1>
          Choisissez votre <span className="souligne">carte Blanches</span> & gardez
          le contrôle de votre budget
        </h1>
        <span className="hero__trait" />
        <p>
          6 cartes pensées pour votre autonomie.vous dépensez sans risque .
        </p>
        <ul className="hero__tags">
          <li>Sans découvert possible</li>
          <li>Sécurisation 3DSv2</li>
          <li>Dès 300 € </li>
        </ul>
      </div>
    </section>
  )
}

function Atouts() {
  return (
    <section className="atouts">
      <div className="conteneur atouts__grille">
        {ATOUTS.map(({ icone: Icone, titre, texte }) => (
          <div className="atout" key={titre}>
            <span className="atout__icone"><Icone /></span>
            <div>
              <strong>{titre}</strong>
              <span>{texte}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Formule({ f }) {
  return (
    <article className={`formule${f.populaire ? ' formule--populaire' : ''}`}>
      {f.populaire && <span className="formule__badge">★ Plus populaire</span>}
      <CarteVisuelle formule={f} />
      <div className="formule__prix">
        <div>
          <span className="etiquette">Plafond de chargement</span>
          <strong>{formatEur(f.plafondChargement)}<small></small></strong>
        </div>
        <div className="formule__abonnement">
          <span className="etiquette">Abonnement</span>
          <strong>{f.mensuel === 0 ? '300 €' : `${formatEur(f.mensuel)}`}</strong>
        </div>
      </div>
      <span className="etiquette">Services inclus :</span>
      <ul className="formule__avantages">
        {f.avantages.map((a, i) => (
          <li key={i}><IconeCheck width={16} height={16} /><span>{a}</span></li>
        ))}
      </ul>
      <LienCommande formule={f} className={`btn ${f.populaire ? 'btn--rouge' : f.theme === 'infinity' ? 'btn--noir' : 'btn--bleu'}`}>
        {f.populaire ? 'Choisir la' : 'Commander la'} {f.nom.split(' ')[0]} <IconeFleche />
      </LienCommande>
    </article>
  )
}

function Formules() {
  return (
    <section className="formules" id="formules">
      <div className="conteneur">
        <div className="section-tete">
          <div>
            <h2>Les 6 formules prépayées</h2>
          </div>
          <p>
            dépensez dans le monde entier
            dans la limite du solde disponible.
          </p>
        </div>
        <div className="formules__grille">
          {FORMULES.map((f) => <Formule key={f.id} f={f} />)}
        </div>
      </div>
    </section>
  )
}

function Appel() {
  return (
    <section className="appel-zone" id="contact">
      <div className="conteneur">
        <div className="appel">
          <div>
            <span className="surtitre surtitre--clair">Reprenez le contrôle</span>
            <h2>Maîtrisez votre budget dès aujourd’hui</h2>
            <p>
              Commandez votre carte et profitez des meilleures experiences.
            </p>
          </div>
          <Link to="/#formules" className="btn btn--rouge btn--grand">
            Commander ma carte <IconeFleche />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Accueil() {
  const { hash } = useLocation()

  // Fait défiler jusqu'à l'ancre (#formules, #contact) quand on arrive d'une autre page.
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Hero />
      <Atouts />
      <Formules />
      <Appel />
    </>
  )
}
