// Numéro WhatsApp du service client qui reçoit les commandes.
// Format international, chiffres uniquement, sans « + » ni espaces.
// Exemple pour 06 12 34 56 78 en France : '33612345678'
export const WHATSAPP_NUMERO = '33759814117'

// Ouvre une conversation WhatsApp avec le service client, message prérempli.
export function ouvrirWhatsApp(texte) {
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texte)}`
  window.open(url, '_blank', 'noopener')
}
