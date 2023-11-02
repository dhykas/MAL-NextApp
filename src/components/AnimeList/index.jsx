import Image from "next/image"
import Link from "next/link"

export const AnimeList = ({ api }) => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
            {api.data?.map((anime) => (
            <Link key={anime.mal_id} href={`/details/${anime.mal_id}`} className="text-color-primary hover:text-color-accent cursor-pointer transition-all"> 
                <Image priority src={anime.images.webp.image_url} width={350} height={350} alt="..." className="w-full max-h-64 object-cover" />
                <h3 className="p-2 md:p-4 font-bold text-sm md:text-xl">{anime.title}</h3>
            </Link>
            ))}
        </div>
    )
}