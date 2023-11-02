export const Pagination = ({ page, setPage, lastPage }) => {

    function scrollTop(){
        scrollTo({
            behavior:"smooth",
            top: 0
        })
    }

    function pagination(p){
        if(page == 1 && p == -1) return
        if(page == lastPage && p == 1) return
        setPage((prev) => prev + p)
        scrollTop()
    }
    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            <button onClick={() => pagination(-1)} className="transition-all hover:text-color-accent">Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={() => pagination(1)} className="transition-all hover:text-color-accent">Next</button>
        </div>
    )
}