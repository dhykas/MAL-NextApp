'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    function handleSearch(event){
        event.preventDefault()
        const keyword = searchRef.current.value
        
        router.push(`/search/${keyword}`)
        searchRef.current.value = "";
    }
    return (
        <form className="relative">
            <input 
            className="p-2 rounded w-full" 
            placeholder="cari anime..." 
            ref={searchRef}
            type="text" 
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </form>
    )
}