// Importiamo le configurazioni e plugin necessari per ESLint
import js from "@eslint/js";                           // Configurazione base JavaScript di ESLint
import globals from "globals";                         // Variabili globali predefinite (es. window, document)
import reactHooks from "eslint-plugin-react-hooks";   // Plugin per controllare le regole degli hooks React
import reactRefresh from "eslint-plugin-react-refresh"; // Plugin per React Fast Refresh (hot reload)

// Esportiamo la configurazione ESLint come array di oggetti
export default [
    // Primo oggetto: specifica quali file/cartelle ignorare
    { ignores: ['dist'] }, // Ignora la cartella 'dist' (file compilati)

    // Secondo oggetto: configurazione principale per i file JavaScript/JSX
    {
        // Specifica quali file devono essere controllati da ESLint
        files: ['**/*.{js,jsx}'], // Tutti i file .js e .jsx in qualsiasi cartella

        // Configurazione del linguaggio JavaScript
        languageOptions: {
            ecmaVersion: 2020,              // Versione ECMAScript da supportare
            globals: globals.browser,       // Variabili globali del browser (window, document, etc.)
            parserOptions: {
                ecmaVersion: 'latest',      // Usa l'ultima versione ECMAScript disponibile
                ecmaFeatures: { jsx: true }, // Abilita il supporto per JSX
                sourceType: 'module',       // Usa i moduli ES6 (import/export)
            },
        },

        // Plugin da utilizzare per controlli aggiuntivi
        plugins: {
            'react-hooks': reactHooks,      // Plugin per controllare l'uso corretto degli hooks
            'react-refresh': reactRefresh,  // Plugin per React Fast Refresh
        },

        // Regole di linting da applicare
        rules: {
            ...js.configs.recommended.rules,        // Regole JavaScript raccomandate
            ...reactHooks.configs.recommended.rules, // Regole React Hooks raccomandate

            // Regola personalizzata: errore per variabili non utilizzate
            // Ma ignora le variabili che iniziano con lettere maiuscole o underscore
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

            // Regola per React Refresh: avvisa se un componente non può essere "refreshato"
            // allowConstantExport: permette l'export di costanti insieme ai componenti
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
    },
]

/*
SPIEGAZIONE SEMPLICE:
===================

Questo file configura ESLint, uno strumento che controlla il tuo codice JavaScript/React
per trovare errori e mantenere uno stile consistente.

COSA FA:
- Controlla tutti i file .js e .jsx del progetto
- Ignora la cartella 'dist' (file compilati)
- Applica regole per JavaScript moderno e React
- Controlla che gli hooks React siano usati correttamente
- Avvisa se ci sono variabili non utilizzate
- Si assicura che i componenti funzionino con React Fast Refresh

BENEFICI:
- Trova errori prima che il codice vada in produzione
- Mantiene il codice pulito e consistente
- Aiuta a seguire le best practices di React
- Migliora la qualità complessiva del codice
*/