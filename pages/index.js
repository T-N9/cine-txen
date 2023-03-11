import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../constants/apiLinks";

import { TRENDING_ALL_DAY } from "../constants/apiLinks";

const Home = () => {
  const { data, error, isLoading } = useSWR(TRENDING_ALL_DAY, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log({ data });
  return (
    <div>
      <h1>Hello NextJS!</h1>
      {data?.results?.map((item) => {
        return (
          <Link href={`/movies/${item.id}`}>
            <a>
              <div>{item.original_title}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
