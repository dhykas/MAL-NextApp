"use client"
import { useState } from "react"
import YouTube from "react-youtube"
export const VideoPlayer = ({ytId}) => {
    const [isOpen, setIsOpen] = useState(true)

    function handleVideoPlayer(){
        setIsOpen((prev) => !prev)
    }

    const option = {
        widht: "350",
        height: "200"
    }

    return isOpen ? (
        <div className="fixed bottom-2 right-2">
            <button onClick={handleVideoPlayer} className="px-3 mb-1 float-right text-color-primary bg-color-secondary">X</button>
            <YouTube 
            videoId={ytId} 
            onready={(event) => event.target.pauseVideo()}
            opts={option}
            /> 
        </div> 
    ) : (
        <button onClick={handleVideoPlayer} className="hover:bg-color-accent transition-all text-xl fixed right-2 bottom-2 text-color-primary p-2 bg-color-secondary rounded">Tonton Trailer</button>
    )
    
}