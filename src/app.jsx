// Importazione dei componenti di layout
import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";

// Importazione dei componenti principali dell'applicazione
import { PuppiesList } from "./components/PuppiesList";
import { Shortlist } from "./components/Shortlist";
import { Search } from "./components/Search";
import { NewPuppyForm } from "./components/NewPuppyForm";

// Importazione dei dati dei cuccioli
import { puppies } from "./data/puppies";

// Componente principale dell'applicazione
export function App() {
    return (
        // Wrapper principale della pagina con sfondo gradiente
        <PageWrapper>
            {/* Container per centrare il contenuto */}
            <Container>
                {/* Header con logo e titolo */}
                <Header />
                {/* Contenuto principale dell'applicazione */}
                <Main />
            </Container>
        </PageWrapper>
    )
}

// Componente che contiene il contenuto principale della pagina
function Main() {
    return (
        <>
            {/* Griglia con componenti di ricerca e lista preferiti */}
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                {/* Componente per la ricerca dei cuccioli */}
                <Search />
                {/* Componente che mostra i cuccioli preferiti */}
                <Shortlist />
            </div>
            {/* Lista principale di tutti i cuccioli disponibili */}
            <PuppiesList puppies={puppies} />
            {/* Form per aggiungere un nuovo cucciolo */}
            <NewPuppyForm />
        </>
    )
}

/*
 * File: App.jsx
 * Descrizione: Componente radice dell'applicazione React per la gestione dei cuccioli.
 * Struttura l'intera applicazione combinando tutti i componenti principali:
 * - Layout (PageWrapper, Container, Header)
 * - Funzionalità (Search, Shortlist, PuppiesList, NewPuppyForm)
 * Il componente Main organizza il contenuto in sezioni logiche per una buona UX.
 */