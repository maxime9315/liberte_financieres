import { Link } from 'react-router-dom'
import {
  IconeCadenas,
  IconeCheck,
  IconeEclair,
  IconeFleche,
  IconeUtilisateur,
} from '../components/Icones.jsx'

const ETAPES = [
  {
    icone: IconeUtilisateur,
    titre: 'Commande envoyée',
    texte: 'Vous choisissez votre formule et remplissez le formulaire avec vos coordonnées.',
    details: [
      'Prénom, nom, e-mail et adresse.',
      'Demande transmise au service client sur WhatsApp.',
    ],
  },
  {
    icone: IconeEclair,
    titre: 'activation de la carte',
    texte: "Notre service client active la carte apres que vous l'avez recu.",
    details: [
      'Mise en service de la carte.',
      "Vérification des informations et validation de la carte."
    ],
  },
  {
    icone: IconeCadenas,
    titre: 'décryptage de la carte',
    texte: 'Votre carte est préparée puis envoyée à l’adresse indiquée.',
    details: [
      "Extraction et interprétation des informations enregistrées.",
      "Transformation des données chiffrées à l’aide  d’une clé de déchiffrement appropriée."
    ],
  },
  {
    icone: IconeEclair,
    titre: 'Encodage de la carte',
    texte: 'Vous activez la carte, la chargez et l’utilisez partout dans le monde.',
    details: [
      'Enregistrement des informations à l’aide d’un système d’encodage.',
      "Configuration et intégration des données pour permettre à la carte de fonctionner."
    ],
  },
]

function Etape({ etape, numero }) {
  const { icone: Icone, titre, texte, details } = etape

  return (
    <article className="formule">
      <span className="formule__badge">Étape {numero}</span>
      <div className="atout" style={{ marginTop: 16 }}>
        <span className="atout__icone"><Icone /></span>
        <div>
          <strong>{titre}</strong>
          <span>{texte}</span>
        </div>
      </div>
      <ul className="formule__avantages" style={{ marginTop: 18 }}>
        {details.map((d) => (
          <li key={d}><IconeCheck width={16} height={16} /><span>{d}</span></li>
        ))}
      </ul>
    </article>
  )
}

export default function EvolutionCommande() {
  return (
    <>
      <section className="hero">
        <div className="conteneur hero__inner">
          <h1>
            Évolution de votre <span className="souligne">commande</span>
          </h1>
          <span className="hero__trait" />
          <p>De la commande à vos retraits.</p>
        </div>
      </section>

      <section className="formules">
        <div className="conteneur">
          <div className="section-tete">
            <div>
              <h2>Les 4 étapes</h2>
            </div>
          </div>
          <div
            className="formules__grille"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          >
            {ETAPES.map((e, i) => <Etape key={e.titre} etape={e} numero={i + 1} />)}
          </div>
        </div>
      </section>

      <section className="appel-zone">
        <div className="conteneur">
          <div className="appel">
            <div>
              <span className="surtitre surtitre--clair">Prêt à commencer ?</span>
              <h2>Choisissez votre carte</h2>
            </div>
            <Link to="/#formules" className="btn btn--rouge btn--grand">
              Voir les formules <IconeFleche />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
