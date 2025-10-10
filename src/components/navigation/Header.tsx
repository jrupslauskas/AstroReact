import Link from 'next/link';

export default function Header() {
  return (
      <header>

        <Link href="/">
            <h1>AstroReact</h1>
        </Link>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/astronauts">Astronauts</Link></li>
                <li><Link href="/iss">ISS Position</Link></li>
            </ul>
        </nav>
      </header>
  )
}