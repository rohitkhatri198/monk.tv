import React from "react";
import { Movie } from "../../type.dt";
import Image from "next/image";

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative  h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[270px] md:scale-105">
      <Image
        alt=""
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm md:rounded object-contain"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
