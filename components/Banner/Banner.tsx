import React, { useState, useEffect } from "react";
import { Movie } from "../../type.dt";
import Image from "next/image";
import { baseUrl } from "../../constants/movie";
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
        <h1 className="text-2xl md:text-4xl lg:text-8xl mb-7 font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>
      </div>
      <div className="flex justify-start  items-center space-x-6">
        <button className="bannerBtn bg-white text-black">
          <div className="h-4 w-4 md:h-7 md:w-7  text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-6 md:h-[1.9rem]"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          Play
        </button>
        <button className="bannerBtn bg-[gray]/70 items-center">
          More Info
          <div className="h-5 w-5 md:h-8 md:w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-[1.9rem]"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Banner;
