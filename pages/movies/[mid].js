import React from "react";
import { API_KEY } from "../../constants/common";
import Link from "next/link";

const MovieDetail = ({ movie }) => {
  const title = movie.original_title;
  const overview = movie.overview;
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>

      <Link href={"/"}>Home</Link>
    </div>
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
    `https://api.themoviedb.org/3/movie/${mid}?api_key=${API_KEY}&language=en-US`
  );

  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
}

export default MovieDetail;
