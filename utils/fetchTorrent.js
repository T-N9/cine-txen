import useSWR from "swr";

/* constant */
import { YTS_TORRENT } from "../constants/common";
import { fetcher } from "../constants/apiLinks";

export const fetchTorrent = (imdbId) => {
  const { data, error } = useSWR(`${YTS_TORRENT}${imdbId}`, fetcher);

  const torrentList =
    data?.data?.movie_count > 0 ? data?.data?.movies[0]?.torrents : [];

  return {
    data,
    error,

    torrentList,
  };
};
