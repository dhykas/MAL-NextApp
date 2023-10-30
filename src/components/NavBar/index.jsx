import Link from "next/link"
import { InputSearch } from "./InputSearch"

export const NavBar = () => {
    return (
        <nav className="bg-color-accent">
            <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
                <Link href="/" className="font-bold text-white text-2xl">My Anime List</Link>
                <InputSearch />
            </div>
        </nav>
    )
}