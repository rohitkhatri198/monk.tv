import React, { useRef, useState } from 'react'
import { Movie } from '../../type.dt'
import { ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid"
import Thumbnail from '../Thumbnail/Thumbnail'

interface Props{
    movies:Movie[]
    title:string
}
function Row({title,movies}:Props) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false)
    const handleClick= (direction:string) =>{
        setIsMoved(true)
        console.log(rowRef.current)
        if (rowRef.current){
            const{scrollLeft, clientWidth}= rowRef.current
            const scrollTo = direction === "left" ?   scrollLeft - clientWidth : scrollLeft + clientWidth
            rowRef.current.scrollTo({left: scrollTo, behavior:'smooth'})
            

        }
    }
  return (
    <div >
        <div className='h-40 md:h-[13rem] space-y-0.5 md:space-y-2'>
            <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>{title}</h2>
            <div className='group relative md:-ml-2 ' >
                <ChevronLeftIcon className={`absolute opacity-0 top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100`} onClick={()=> handleClick("left")}/>

                    <div className='flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:gap-x-9.5  md:p-2' ref={rowRef}>
                       {movies.map((movie) =>(<Thumbnail movie={movie} key={movie.id}/>))}
                    </div>

                <ChevronRightIcon className='absolute opacity-0 top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer  transition hover:scale-125 group-hover:opacity-100' onClick={()=> handleClick("right")}/>
            </div>
        </div>
    </div>
  )
}

export default Row