// Componente per il toggle del like con contatore
import * as React from "react";
import { Heart } from "lucide-react";

export function LikeToggle() {
    // State per tracciare se l'elemento è stato messo "mi piace"
    const [isLiked, setIsLiked] = React.useState(false);
    // State per contare il numero di click sul pulsante
    const [count, setCount] = React.useState(0);

    // Funzione che gestisce il click sul pulsante like
    function handleClick() {
        // Inverte lo stato del like (da true a false o viceversa)
        setIsLiked(!isLiked);
        // Incrementa il contatore di 1 usando la funzione di callback
        setCount((prevCount) => prevCount + 1);
        // Nota: questa riga duplicata incrementa il contatore di un ulteriore 1
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <>
            {/* Pulsante per il like con icona cuore e contatore */}
            <button className="group flex items-center gap-2" onClick={handleClick}>
                {/* Icona cuore che cambia colore in base allo stato isLiked */}
                <Heart className={isLiked ? " fill-pink-500 stroke-none" : " stroke-slate-500 group-hover:stroke-slate-300 "} />
                {/* Contatore che mostra il numero di click */}
                <span>{count}</span>
            </button>
        </>
    )
}

/*
 * File: LikeToggle.tsx
 * Descrizione: Componente interattivo per il sistema di "mi piace" con contatore.
 * Permette agli utenti di mettere like cliccando su un'icona a forma di cuore che cambia
 * colore quando attivata. Include un contatore che tiene traccia del numero di click.
 * Utilizza React hooks (useState) per gestire lo stato locale del componente.
 */