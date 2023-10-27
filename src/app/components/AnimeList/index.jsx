import Image from "next/image"
import Link from "next/link"

export const AnimeList = ({ title, images, id }) => {
    
    return (
            <Link href={`/${id}`} className="cursor-pointer"> 
                <Image priority src={images} width={350} height={350} alt="..." />
                <h3 className="p-2 md:p-4 font-bold text-sm md:text-xl">{title}</h3>
            </Link> 
    )
}