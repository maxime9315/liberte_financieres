import { useState } from 'react'
import { ouvrirWhatsApp, WHATSAPP_NUMERO } from '../data/contact.js'
import Fenetre from './Fenetre.jsx'
import { IconeFleche } from './Icones.jsx'

const VIDE = { prenom: '', nom: '', email: '', codePostal: '' }

function valider(v) {
  const e = {}
  if (!v.prenom.trim()) e.prenom = 'Prénom requis'
  if (!v.nom.trim()) e.nom = 'Nom requis'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Adresse e-mail invalide'
  if (!/^\d{5}$/.test(v.codePostal.trim())) e.codePostal = 'Code postal à 5 chiffres'
  return e
}

function message(formule, v) {
  return [
    `Bonjour, je souhaite commander la carte ${formule.nom}.`,
    '',
    `Prénom : ${v.prenom.trim()}`,
    `Nom : ${v.nom.trim()}`,
    `E-mail : ${v.email.trim()}`,
    `Code postal : ${v.codePostal.trim()}`,
  ].join('\n')
}

// Fenêtre « Commander » : recueille les coordonnées puis ouvre WhatsApp avec
// un message prérempli adressé au service client.
export default function FenetreCommande({ formule, onFermer }) {
  const [valeurs, setValeurs] = useState(VIDE)
  const [erreurs, setErreurs] = useState({})

  const changer = (e) => {
    const { name, value } = e.target
    setValeurs((v) => ({ ...v, [name]: value }))
    setErreurs((er) => ({ ...er, [name]: undefined }))
  }

  const soumettre = (e) => {
    e.preventDefault()
    const er = valider(valeurs)
    setErreurs(er)
    if (Object.keys(er).length || !WHATSAPP_NUMERO) return
    ouvrirWhatsApp(message(formule, valeurs))
    onFermer()
  }

  const champ = (nom, etiquette, props = {}) => (
    <label className={`champ${erreurs[nom] ? ' champ--erreur' : ''}`}>
      <span className="etiquette">{etiquette}</span>
      <input name={nom} value={valeurs[nom]} onChange={changer} {...props} />
      {erreurs[nom] && <span className="champ__erreur">{erreurs[nom]}</span>}
    </label>
  )

  return (
    <Fenetre
      surtitre="Commande"
      titre={`Carte ${formule.nom}`}
      texte="Renseignez vos coordonnées : votre demande sera envoyée à notre service client sur WhatsApp."
      onFermer={onFermer}
    >
      <form className="formulaire" onSubmit={soumettre} noValidate>
        <div className="formulaire__ligne">
          {champ('prenom', 'Prénom', { autoComplete: 'given-name', autoFocus: true })}
          {champ('nom', 'Nom', { autoComplete: 'family-name' })}
        </div>
        {champ('email', 'Adresse e-mail', { type: 'email', autoComplete: 'email' })}
        {champ('codePostal', 'Code postal', {
          inputMode: 'numeric',
          autoComplete: 'postal-code',
          maxLength: 5,
          placeholder: '75001',
        })}

        {!WHATSAPP_NUMERO && (
          <p className="formulaire__alerte">
            Le numéro WhatsApp du service client n’est pas encore configuré.
          </p>
        )}

        <button type="submit" className="btn btn--rouge formulaire__envoyer">
          Passez la commande
        </button>
      </form>
    </Fenetre>
  )
}
