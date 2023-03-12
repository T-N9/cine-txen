import Image from "next/image";
import Head from "next/head";
import { API_KEY } from "../../constants/common";
import { TMDB_IMG_2, TMDB_IMG_RES } from "../../constants/common";

import MovieTorrent from "../../components/MovieTorrent";

const MovieDetail = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    runtime,
    vote_average,
    genres,
    overview,
    credits,
    imdb_id,
  } = movie;

  return (
    <>
      <Head>
        <title>{original_title}</title>
      </Head>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3">
            <Image
              src={`${TMDB_IMG_2}${TMDB_IMG_RES.poster_sizes[2]}${poster_path}`}
              alt={original_title}
              width={300}
              height={450}
              quality="10"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h1 className="text-4xl font-bold">{original_title}</h1>
            <div className="flex flex-row items-center">
              <span className="font-semibold mr-2">Release Date:</span>
              <span>{release_date}</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="font-semibold mr-2">Runtime:</span>
              <span>{runtime} min</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="font-semibold mr-2">Rating:</span>
              <span>{vote_average} / 10</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="font-semibold mr-2">Genres:</span>
              <span>{genres.map((genre) => genre.name).join(", ")}</span>
            </div>
            <div className="text-lg font-medium">{overview}</div>
            {imdb_id && <MovieTorrent imdb_id={imdb_id} />}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();

  return {
    paths: data?.results?.map((d) => ({ params: { mid: d.id.toString() } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { mid } = context.params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${mid}?api_key=${API_KEY}&language=en-US&append_to_response=videos,releases,content_ratings`
  );

  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
}

export default MovieDetail;
