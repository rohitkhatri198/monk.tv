import React, { useState, useEffect } from "react";
import{ useRecoilState} from "recoil"
import { Movie } from "../../type.dt";
import Image from "next/image";
import { baseUrl } from "../../constants/movie";
import { InformationCircleIcon, PlayIcon } from "@heroicons/react/20/solid";
import { modalState, movieState } from "../../atoms/modalAtom";
interface Props {
  netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[95vh] lg:justify-end">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <img
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="banner"
         className="fill w-100% object-cover"
        />
      </div>
      <div className="">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-7 font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview.slice(0,105)}
        </p>
      </div>
      <div className="flex justify-start  items-center space-x-6">
        <button className="bannerBtn bg-[#52f152] text-black">
          <PlayIcon className="h-4 w-4 md:h-7 md:w-7  text-black"/>
          Play
        </button>
        <button className="bannerBtn bg-[black]/70 items-center" onClick={()=>{
          setShowModal(true)
          setCurrentMovie(movie)
        }}>
          More Info
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8 text-[#52f152]"/>
      
        </button>
      </div>
    </div>
  );
}

export default Banner;
