// Componente che visualizza la lista di tutti i cuccioli in una griglia
export function PuppiesList({ puppies }) {
    return (
        // Griglia responsiva che mostra i cuccioli in colonne multiple
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                // Mappa ogni cucciolo in un componente PuppyCard
                puppies.map((puppy) => (
                    <PuppyCard key={puppy.id} puppy={puppy} />
                ))
            }
        </ul >
    )
}

// Componente che rappresenta la card di un singolo cucciolo
function PuppyCard({ puppy }) {
    return (
        // Card del cucciolo con effetto hover e ombra
        <li key={puppy.id} className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
            {/* Immagine del cucciolo */}
            <img
                className="aspect-square object-cover"
                alt={puppy.name}
                src={puppy.imagePath}
            />
            {/* Contenitore per le informazioni del cucciolo */}
            <div className="flex items-center justify-between gap-2 p-4 text-sm">
                {/* Sezione con nome e caratteristica */}
                <div className="flex items-center gap-2">
                    {/* Nome del cucciolo */}
                    <p className="font-semibold">{puppy.name}</p>
                    {/* Separatore visivo */}
                    <span className="text-slate-300">·</span>
                    {/* Caratteristica del cucciolo */}
                    <p className="text-slate-500">{puppy.trait}</p>
                </div>
                {/* Pulsante per aggiungere/rimuovere dai preferiti */}
                <button>
                    {/* Icona cuore con stato condizionale (Chase è già nei preferiti) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={puppy.id == 2 ? " fill-pink-500 stroke-none" : " stroke-slate-200 group-hover:stroke-slate-300"}
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </button>
            </div>
        </li>
    )
}

/*
 * File: PuppiesList.jsx
 * Descrizione: Componente responsabile della visualizzazione della griglia di cuccioli.
 * Contiene due componenti:
 * - PuppiesList: container principale che organizza i cuccioli in una griglia responsiva
 * - PuppyCard: card individuale per ogni cucciolo con immagine, informazioni e pulsante preferiti
 * Include logica per mostrare lo stato dei preferiti (Chase è preselezionato come esempio).
 */