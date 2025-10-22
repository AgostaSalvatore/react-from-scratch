type Puppy = {
    // Identificatore univoco del cucciolo
    id: number;
    // Nome del cucciolo
    name: string;
    // Caratteristica distintiva del cucciolo
    vibe: string;
    // Percorso dell'immagine del cucciolo
    imagePath: string;
}

// Array di dati contenente le informazioni di tutti i cuccioli disponibili
export const puppies: Puppy[] = [
    {
        // Identificatore univoco del cucciolo
        id: 1,
        // Nome del cucciolo
        name: "Frisket",
        // Caratteristica distintiva del cucciolo
        vibe: "Mother of all pups",
        // Percorso dell'immagine del cucciolo
        imagePath: "/images/1.jpg",
    },
    {
        // Identificatore univoco del cucciolo
        id: 2,
        // Nome del cucciolo
        name: "Chase",
        // Caratteristica distintiva del cucciolo
        vibe: "Very good boi",
        // Percorso dell'immagine del cucciolo
        imagePath: "/images/2.jpg",
    },
    {
        // Identificatore univoco del cucciolo
        id: 3,
        // Nome del cucciolo
        name: "Leia",
        // Caratteristica distintiva del cucciolo
        vibe: "Enjoys naps",
        // Percorso dell'immagine del cucciolo
        imagePath: "/images/3.jpg",
    },
    {
        // Identificatore univoco del cucciolo
        id: 4,
        // Nome del cucciolo
        name: "Pupi",
        // Caratteristica distintiva del cucciolo
        vibe: "Loves cheese",
        // Percorso dell'immagine del cucciolo
        imagePath: "/images/4.jpg",
    },
    {
        // Identificatore univoco del cucciolo
        id: 5,
        // Nome del cucciolo
        name: "Russ",
        // Caratteristica distintiva del cucciolo
        vibe: "Ready to save the world",
        // Percorso dell'immagine del cucciolo
        imagePath: "/images/5.jpg",
    },
    {
        // Identificatore univoco del cucciolo
        id: 6,
        // Nome del cucciolo
        name: "Yoko",
        // Caratteristica distintiva del cucciolo
        vibe: "Ready for anything",
        // Percorso dell'immagine del cucciolo
        imagePath: "/images/6.jpg",
    }
];

/*
 * File: puppies.ts
 * Descrizione: Questo file contiene i dati statici di tutti i cuccioli disponibili nell'applicazione.
 * Ogni oggetto puppy ha un id univoco, un nome, una caratteristica distintiva e il percorso dell'immagine.
 * Questi dati vengono utilizzati dal componente PuppiesList per visualizzare la griglia dei cuccioli.
 */