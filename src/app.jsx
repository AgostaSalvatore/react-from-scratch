import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";

// Main Components
import { PuppiesList } from "./components/PuppiesList";
import { Shortlist } from "./components/Shortlist";
import { Search } from "./components/Search";
import { NewPuppyForm } from "./components/NewPuppyForm";

export function App() {
    return (
        <PageWrapper>

            <Container>
                <Header />
                <Main />
            </Container>

        </PageWrapper>
    )
}

function Main() {
    return (
        <>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                <Search />
                <Shortlist />
            </div>
            <PuppiesList />
            <NewPuppyForm />
        </>

    )
}