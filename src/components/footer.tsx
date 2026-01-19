import { Icons } from "@/components/icons";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-2xl px-4 md:px-8">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <Link
                        href="/"
                        className="font-medium underline underline-offset-4"
                    >
                        Davide Palleschi
                    </Link>
                    . The source code is available on{" "}
                    <Link
                        href="https://github.com/davidepalleschi/davidepalleschi.github.io"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </Link>
                    .
                </p>
                <div className="flex gap-4">
                    <Link href="https://github.com/davidepalleschi" target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Icons.gitHub className="h-5 w-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/davide-palleschi" target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Icons.linkedIn className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
