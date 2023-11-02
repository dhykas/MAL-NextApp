import { getAnimeResponse } from "@/app/libs/api-libs"
import { VideoPlayer } from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async({ params: {id}}) => {
  const { data: anime } = await getAnimeResponse(`anime/${id}`) 
  return (
    <>
        <div className="p-4">
            <h3 className="text-2xl text-color-primary">{anime.title} - {anime.year}</h3>
        </div>
        <div className="p-4 flex gap-2 text-color-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Peringkat</h3>
                <p>{anime.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Seasons</h3>
                <p>{anime.season}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>episodes</h3>
                <p>{anime.episodes}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Skor</h3>
                <p>{anime.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Members</h3>
                <p>{anime.members}</p>
            </div>
        </div>
        <div className="p-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
            <Image src={anime.images.webp.image_url} 
            alt={anime.images.jpg.image_url}
            width={350}
            height={350}
            className="w-full rounded object-cover"
            />
            <p className="text-justify text-xl" dangerouslySetInnerHTML={{ __html: anime.synopsis.replace(/\n/g, '<br/>') }}></p>
        </div>
        <div>
            <VideoPlayer ytId={anime.trailer.youtube_id} />
        </div>
    </>
    )
}

export default Page
