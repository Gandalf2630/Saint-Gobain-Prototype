import Link from "next/link"
export default function Navbar() {
    return (
        <div className="flex h-44 justify-between min-w-screen">
            <nav className="flex justify-between items-center px-28 py-6 w-full">
                <div className="flex items-center">
                    <Link href="/"><img src="/assets/logo.png"/> </Link>
                </div>
                <ul className="flex space-x-8 text-2xl">

                    <li className="hover:text-yellow-400">
                    <Link href="/produkter">Produkter</Link>
                    </li>

                    <li className="hover:text-yellow-400">
                       <Link href="/kundeservice">Kundservice</Link>
                    </li>
                    <li className="hover:text-yellow-400">
                       <Link href="/info">Bæredygtighed</Link> 
                    </li>
                </ul> 
            </nav>
        </div>
    )
}