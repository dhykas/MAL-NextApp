'use client'
import { AnimeList } from "@/components/AnimeList"
import { Pagination } from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../libs/api-libs"
const { HeaderMenu } = require("@/components/Utilities/HeaderMenu")

const Page = () => {
    const [page,setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const data = await getAnimeResponse('top/anime',`page=${page}`)
        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    
    return (
        <>
            <HeaderMenu title={`Anime Terpopuler #${page}`} />
            <AnimeList api={topAnime}/>
            <Pagination page={page} setPage={setPage} lastPage={ topAnime.pagination?.last_visible_page} />
        </>
    )
}

export default Page