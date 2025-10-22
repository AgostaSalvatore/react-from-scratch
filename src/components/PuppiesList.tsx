// Importazione del tipo Puppy dal file dati per la tipizzazione TypeScript
import { type Puppy } from "../types";
import { LikeToggle } from "./LikeToggle";

// Componente che visualizza la lista di tutti i cuccioli in una griglia
// Props tipizzate: puppies deve essere un array di oggetti Puppy
export function PuppiesList({ puppies }: { puppies: Puppy[] }) {
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

// Definizione del tipo per le props del componente PuppyCard
// Questo garantisce che il componente riceva esattamente un oggetto puppy di tipo Puppy
type PuppyCardProps = {
    puppy: Puppy; // Il cucciolo deve rispettare la struttura definita nel tipo Puppy
}

// Componente che rappresenta la card di un singolo cucciolo
function PuppyCard({ puppy }: PuppyCardProps) {
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
                    <p className="text-slate-500">{puppy.vibe}</p>
                </div>
                {/* Pulsante per aggiungere/rimuovere dai preferiti */}
                <LikeToggle />
            </div>
        </li>
    )
}

/*
 * File: PuppiesList.tsx
 * Descrizione: Componente responsabile della visualizzazione della griglia di cuccioli.
 * 
 * CONVERSIONE A TYPESCRIPT (.tsx):
 * - Il file è stato convertito da .jsx a .tsx per abilitare la tipizzazione TypeScript
 * - Questo permette di avere controllo dei tipi a compile-time e migliore IntelliSense
 * - Previene errori di runtime legati a proprietà mancanti o tipi sbagliati
 * 
 * TIPIZZAZIONE:
 * - Importiamo il tipo 'Puppy' per garantire coerenza dei dati
 * - PuppiesList ha props tipizzate: { puppies: Puppy[] } per garantire array corretto
 * - PuppyCardProps definisce esattamente quali props deve ricevere PuppyCard
 * - TypeScript verificherà che ogni puppy abbia id, name, vibe e imagePath
 * - Errore risolto: cambiato puppy.trait in puppy.vibe per coerenza con il tipo
 * 
 * Contiene due componenti:
 * - PuppiesList: container principale che organizza i cuccioli in una griglia responsiva
 * - PuppyCard: card individuale per ogni cucciolo con immagine, informazioni e pulsante preferiti
 * Include logica per mostrare lo stato dei preferiti (Chase è preselezionato come esempio).
 */