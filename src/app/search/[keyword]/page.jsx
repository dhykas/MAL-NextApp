import { AnimeList } from "@/components/AnimeList"
import { Header } from "@/components/AnimeList/header"

const Page = async({ params }) => {
  const { keyword } = params
  const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await res.json()
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
