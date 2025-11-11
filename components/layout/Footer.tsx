import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="border-t border-zinc-200/60 dark:border-zinc-800 py-8">
            <Container className="text-sm text-zinc-500 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p>© {new Date().getFullYear()} Julen Rivas Plaza.</p>
                <p className="opacity-80">Porfolio</p>
            </Container>
        </footer>
    );
}
