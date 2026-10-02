export default function CarteVisuelle({ formule }) {
  return (
    <div className={`carte carte--${formule.theme}`} aria-hidden="true">
      <div className="carte__haut">
        <div>
          <span className="carte__edition">{formule.edition}</span>
          <span className="carte__nom">{formule.nom}</span>
        </div>
        <span className="carte__marque">LF</span>
      </div>
      <span className="carte__puce" />
      <span className="carte__numero">•••• •••• •••• {formule.numero}</span>
      <div className="carte__bas">
        <span>Carte</span>
      </div>
    </div>
  )
}