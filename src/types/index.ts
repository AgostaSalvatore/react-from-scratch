// Definizione del tipo Puppy per la tipizzazione TypeScript
export type Puppy = {
    // Identificatore univoco del cucciolo
    id: number;
    // Nome del cucciolo
    name: string;
    // Caratteristica distintiva del cucciolo
    vibe: string;
    // Percorso dell'immagine del cucciolo
    imagePath: string;
}

/*
 * File: index.ts
 * Descrizione: File centrale per la definizione di tutti i tipi TypeScript dell'applicazione.
 * 
 * TIPO PUPPY:
 * - Definisce la struttura dati per rappresentare un cucciolo nell'applicazione
 * - Utilizzato in tutto il progetto per garantire type safety
 * - Previene errori di runtime legati a proprietà mancanti o tipi sbagliati
 * 
 * ORGANIZZAZIONE:
 * - Centralizza tutti i tipi in un unico file per facilità di manutenzione
 * - Esportato come named export per permettere import selettivi
 * - Segue le convenzioni TypeScript per la nomenclatura dei tipi (PascalCase)
 */