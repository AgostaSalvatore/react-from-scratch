// Componente che mostra la lista dei cuccioli preferiti
export function ShortList() {
    return (
        <div>
            {/* Titolo della sezione con icona cuore */}
            <h2 className="flex items-center gap-2 font-medium">
                <span>Your shortlist</span>
                {/* Icona cuore per indicare i preferiti */}
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
                    className="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500"
                >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
            </h2>
            {/* Lista dei cuccioli preferiti */}
            <ul className="mt-4 flex flex-wrap gap-4">
                {/* Primo cucciolo preferito - Chase */}
                <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
                    {/* Immagine miniatura del cucciolo */}
                    <img
                        height={32}
                        width={32}
                        alt="Chase"
                        className="aspect-square w-8 object-cover"
                        src="/images/2.jpg"
                    />
                    {/* Nome del cucciolo */}
                    <p className="px-3 text-sm text-slate-800">Chase</p>
                    {/* Pulsante per rimuovere dai preferiti */}
                    <button className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
                        {/* Icona X per rimuovere */}
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
                            className="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </li>
                {/* Secondo cucciolo preferito - Leia */}
                <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
                    {/* Immagine miniatura del cucciolo */}
                    <img
                        height={32}
                        width={32}
                        alt="Leia"
                        className="aspect-square w-8 object-cover"
                        src="/images/3.jpg"
                    />
                    {/* Nome del cucciolo */}
                    <p className="px-3 text-sm text-slate-800">Leia</p>
                    {/* Pulsante per rimuovere dai preferiti */}
                    <button className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
                        {/* Icona X per rimuovere */}
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
                            className="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    )
}

/*
 * File: ShortList.tsx
 * Descrizione: Componente che visualizza la lista dei cuccioli preferiti dell'utente.
 * Mostra Chase e Leia come esempi di cuccioli già aggiunti ai preferiti.
 * Ogni elemento include miniatura, nome e pulsante per rimuovere dai preferiti.
 * Include animazioni di transizione e stati hover per una migliore UX.
 */