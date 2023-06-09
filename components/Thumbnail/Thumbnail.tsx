import React from "react";
import { Movie } from "../../type.dt";
import Image from "next/image";
import { modalState, movieState } from "../../atoms/modalAtom";
import { useRecoilState } from "recoil";

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  return (
    <div
      className="relative  h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[277px] md:scale-105 hover:scale-[1.02] md:hover:scale-[1.09] hover:transition hover:ease-in hover:duration-200 rounded "
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        alt=""
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm md:rounded-lg lg:rounded-md object-contain"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
