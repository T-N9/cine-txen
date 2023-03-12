import Link from "next/link";
import Image from "next/image";

import useSWR from "swr";
import { fetcher } from "../constants/apiLinks";

import { TRENDING_ALL_DAY } from "../constants/apiLinks";
import {  TMDB_IMG_2, TMDB_IMG_RES } from "../constants/common";

const HomeHero = () => {
  const { data, error, isLoading } = useSWR(TRENDING_ALL_DAY, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log({ data });
  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Todays Trending</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.results?.map((item) => {
          return (
            <Link href={`/movies/${item.id}`}>
              <a>
                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <Image
                    src={`${TMDB_IMG_2}${TMDB_IMG_RES.poster_sizes[2]}${item.poster_path}`}
                    width={200}
                    height={300}
                    quality="10"
                    alt={item.original_title}
                  />
                  <div className="p-4">
                    <p className="text-lg font-medium text-gray-800 mb-2">
                      {item.original_title}
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      {item.release_date}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHero;
