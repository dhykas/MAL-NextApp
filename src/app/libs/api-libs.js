export const getAnimeResponse = async(resource, query) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    return await res.json()
     
}