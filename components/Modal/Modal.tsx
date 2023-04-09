import React, { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atoms/modalAtom";
import {
  HandThumbUpIcon,
  PlayIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Element, Genre } from "../../type.dt";
import ReactPlayer from "react-player/lazy";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState();
  const [muted, setMuted] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-10 mx-auto w-full  max-w-3xl  overflow-hidden overflow-y-scroll  rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton group absolute top-5 right-5 !z-10 h-9 w-9 bg-[#181818] hover:bg-[#181818] border-none"
        >
          <XMarkIcon className="h-7 w-7 group-hover:transition group-hover:scale-[1.08]" />
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full justify-between items-center px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 text-black rounded bg-[#52f152] px-8 py-1 font-bold transition hover:bg-[#52f152cb]">
                <PlayIcon className="h-4 w-4 md:h-7 md:w-7  text-black" />
                Play
              </button>

              <button className="modalButton">
                <PlusIcon className="h-7 w-7" />
              </button>
              <button className="modalButton">
                <HandThumbUpIcon className="h-7 w-7" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <FiVolumeX className="w-6 h-6" />
              ) : (
                <FiVolume2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="flex  space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6  text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie!.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4  items-center justify-center rounded border border-white/40 px-1.5 text-sm">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <div>
                <h2 className="font-semibold"> {movie?.title || movie?.name || movie?.original_name}</h2>
                <p className="w-5/6">{movie?.overview}</p>
              </div>

              <div className="flex  flex-col  space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">
                    Genres:{" "}
                    <span className="text-white">
                      {" "}
                      {genres.map((genre) => genre.name).join(`,`)}
                    </span>
                  </span>
                </div>

                <div>
                  <span className="text-[gray]">language: </span>
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;
