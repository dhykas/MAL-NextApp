import Link from "next/link"

export const NavBar = () => {
    return (
        <nav className="bg-indigo-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href="/" className="font-bold text-white text-2xl">My Anime List</Link>
                <input placeholder="cari anime..." type="text" className="" />
            </div>
        </nav>
    )
}