import { useEffect, useRef } from 'react'

// Fenêtre modale : se ferme avec ×, Échap ou un clic à côté.
export default function Fenetre({ surtitre, titre, texte, onFermer, children }) {
  const dialogue = useRef(null)

  useEffect(() => {
    dialogue.current?.showModal()
  }, [])

  return (
    <dialog
      ref={dialogue}
      className="fenetre"
      onClose={onFermer}
      onClick={(e) => e.target === dialogue.current && dialogue.current.close()}
    >
      <div className="fenetre__contenu">
        <button type="button" className="fenetre__fermer" aria-label="Fermer" onClick={() => dialogue.current.close()}>
          ×
        </button>
        <span className="surtitre">{surtitre}</span>
        <h2>{titre}</h2>
        <p className="fenetre__texte">{texte}</p>
        {children}
      </div>
    </dialog>
  )
}
