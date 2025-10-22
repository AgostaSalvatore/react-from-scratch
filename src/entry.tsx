// Importazione del file CSS principale dell'applicazione
import "./app.css";
// Importazione di React StrictMode per controlli aggiuntivi in sviluppo
import { StrictMode } from "react";
// Importazione della funzione per creare il root dell'applicazione React 18+
import { createRoot } from "react-dom/client";

// Importazione del componente principale dell'applicazione
import { App } from "./App";

// Creazione del root dell'applicazione e rendering del componente App
// StrictMode attiva controlli aggiuntivi e avvisi per aiutare nello sviluppo
createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App />
    </StrictMode>
);

/*
 * File: entry.tsx
 * Descrizione: Entry point principale dell'applicazione React.
 * Questo file è responsabile del bootstrap dell'applicazione:
 * - Importa gli stili globali
 * - Configura React 18+ con createRoot
 * - Attiva StrictMode per controlli di sviluppo
 * - Monta il componente App nell'elemento DOM con id 'app'
 */