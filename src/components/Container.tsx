// Componente container per centrare e limitare la larghezza del contenuto
export function Container({ children }) {
  return (
    // Div con larghezza massima centrato e padding responsivo
    <div className="mx-auto max-w-5xl p-4 md:p-8">
      {/* Renderizza tutti i componenti figli */}
      {children}
    </div>
  );
}

/*
 * File: Container.tsx
 * Descrizione: Componente di layout che fornisce un contenitore centrato con larghezza massima.
 * Applica padding responsivo e centra il contenuto nella pagina per una migliore leggibilità
 * su schermi di diverse dimensioni. È un pattern comune per limitare la larghezza del contenuto.
 */
