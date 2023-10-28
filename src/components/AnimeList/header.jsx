import Link from "next/link"
export const Header = ({ title, linkhref, linkTitle }) => {
    return (
        <div className="flex items-center justify-between p-4">
             <h1 className="text-2xl font-bold">{title}</h1>
            {linkTitle && linkhref ? 
            <Link href={linkhref} className=" text-md md:text-xl underline hover:text-indigo-500 transition-all">{linkTitle ? linkTitle : 'Lihat Semua'}</Link>
            : null    
        }
        </div>
    )
}