import { AnimeList } from "@/components/AnimeList"
import { Header } from "@/components/AnimeList/header"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async() => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=12');
  return (
    <>
      <section>
        <Header title="paling populer" linkTitle="Lihat Semua" linkhref="/populer" />
        <AnimeList api={topAnime} />
      </section>

    </>
    )
}

export default Page
