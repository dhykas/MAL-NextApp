import { getAnimeResponse } from "@/app/libs/api-libs"
import { AnimeList } from "@/components/AnimeList"
import { Header } from "@/components/AnimeList/header"

const Page = async({ params }) => {
  const { keyword } = params
  const searchAnime = await getAnimeResponse('anime',`q=${keyword}`) 
  const decodedKeyword = decodeURIComponent(keyword);

  return (
    <>
    {/* anime terpopuler */}
      <section>
        <Header title={`pencarian untuk ${decodedKeyword}...`} linkhref="/populer" />
        <AnimeList api={searchAnime} />
      </section>

    </>
    )
}

export default Page
