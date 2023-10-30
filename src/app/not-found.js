'use client'
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4">
                <FileSearch size={44} className="text-color-accent" />
                <h3 className="text-4xl font-bold text-color-accent">Not Found</h3>
                <Link href="/" className="transition-all underline text-color-primary hover:text-color-accent">Kembali</Link>
            </div>
        </div>
    )
}

export default Page