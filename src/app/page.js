import { AnimeList } from "@/app/components/AnimeList"
import Link from "next/link"
const Home = async() => {
  const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
  const anime = await res.json()
  // console.log(anime.data)


  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href="/populer" className=" text-md md:text-xl underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
          {anime.data.map(data => (
            <div key={data.mal_id} className="shadow-xl">
             <AnimeList 
              title={data.title} 
              images={data.images.webp.image_url} 
              id={data.mal_id}
             />
            </div>
          ))}
      </div>
    </>  
    )
}

export default Home
