// Componente wrapper principale che definisce lo sfondo e l'altezza della pagina
export function PageWrapper({ children }) {
  return (
    // Div con altezza minima viewport e sfondo gradiente
    <div className="min-h-dvh bg-linear-to-b from-cyan-200 to-white to-[60vh]">
      {/* Renderizza tutti i componenti figli */}
      {children}
    </div>
  );
}

/*
 * File: PageWrapper.tsx
 * Descrizione: Componente wrapper che fornisce il layout base della pagina.
 * Applica un'altezza minima pari al viewport e uno sfondo con gradiente lineare
 * dal ciano al bianco, creando un effetto visivo piacevole per l'intera applicazione.
 */
