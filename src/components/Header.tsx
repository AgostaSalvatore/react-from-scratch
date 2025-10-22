// Componente header dell'applicazione con logo e testo introduttivo
export function Header() {
  return (
    <header>
      {/* Sezione logo con link alla homepage */}
      <a className="group" href="/">
        {/* Container per logo e testo del brand */}
        <div className="inline-flex items-center gap-4">
          {/* Logo dell'applicazione con effetti hover */}
          <img
            src="/images/logo.png"
            alt="DevPups"
            className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
          />
          {/* Nome del brand */}
          <p className="text-lg font-semibold">Dev Pups</p>
        </div>
      </a>
      {/* Sezione hero con titolo e sottotitolo */}
      <div className="mt-6">
        {/* Titolo principale della pagina */}
        <h1 className="text-lg font-bold">We've got the best puppies!</h1>
        {/* Sottotitolo descrittivo */}
        <p className="text-slate-600">
          Don't take our word — let the pictures do the talking :)
        </p>
      </div>
    </header>
  );
}

/*
 * File: Header.tsx
 * Descrizione: Componente header che contiene il branding e l'introduzione dell'applicazione.
 * Include il logo con effetti hover interattivi, il nome del brand e una sezione hero
 * con titolo e sottotitolo che introducono l'utente al contenuto della pagina.
 */
