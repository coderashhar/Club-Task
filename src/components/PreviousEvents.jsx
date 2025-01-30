import ImageCarousel from "./ImageCarousel"
export default function PreviousEvents(){
    return (
        <div className="flex flex-col items-center pt-10 px-5 pb-15 mb-13 mt-20 border rounded-2xl border-neutral-500/80">
            <p className="text-4xl">Highlights from Previous Events</p>
            <ImageCarousel/>
        </div> 
    )
}