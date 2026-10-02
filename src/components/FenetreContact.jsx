import { useState } from 'react'
import { ouvrirWhatsApp } from '../data/contact.js'
import Fenetre from './Fenetre.jsx'
import { IconeFleche } from './Icones.jsx'

// Fenêtre « Contact » : message libre envoyé au service client sur WhatsApp.
export default function FenetreContact({ onFermer }) {
  const [texte, setTexte] = useState('')
  const [erreur, setErreur] = useState('')

  const soumettre = (e) => {
    e.preventDefault()
    if (!texte.trim()) return setErreur('Écrivez votre message')
    ouvrirWhatsApp(texte.trim())
    onFermer()
  }

  return (
    <Fenetre
      surtitre="Service client"
      titre="Contactez-nous"
      texte="Décrivez votre demande ou votre problème : votre message sera envoyé à notre service client sur WhatsApp."
      onFermer={onFermer}
    >
      <form className="formulaire" onSubmit={soumettre} noValidate>
        <label className={`champ${erreur ? ' champ--erreur' : ''}`}>
          <span className="etiquette">Votre message</span>
          <textarea
            name="message"
            rows={6}
            value={texte}
            autoFocus
            placeholder="Bonjour, j’ai une question concernant…"
            onChange={(e) => {
              setTexte(e.target.value)
              setErreur('')
            }}
          />
          {erreur && <span className="champ__erreur">{erreur}</span>}
        </label>

        <button type="submit" className="btn btn--rouge formulaire__envoyer">
          Envoyer sur WhatsApp <IconeFleche />
        </button>
      </form>
    </Fenetre>
  )
}
