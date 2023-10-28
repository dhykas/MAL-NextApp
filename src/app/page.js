import { AnimeList } from "@/components/AnimeList"
import { Header } from "@/components/AnimeList/header"

const Page = async() => {
  const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
  const topAnime = await res.json()

  return (
    <>
    {/* anime terpopuler */}
      <section>
        <Header title="paling populer" linkhref="/populer" />
        <AnimeList api={topAnime} />
      </section>

    </>
    )
}

export default Page
