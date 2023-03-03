import Link from 'next/link';

export function Header() {
    return <header>
        <nav>
            <Link href="/">Apteryx</Link>

            <Link href="/projects">Projects</Link>
        </nav>
    </header>;
}
