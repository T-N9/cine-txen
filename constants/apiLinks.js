import { BASE_URL, API_KEY } from "./common";

/* Home - Hero */
export const TRENDING_ALL_DAY = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;

// discover movie with genres - genre query eg. &with_genres=28
export const DISCOVER_MOVIES_GENRES = `${BASE_URL}discover/`;

// movie detail
export const MOVIE_DETAIL = `${BASE_URL}movie/`;

// series detail
export const SERIES_DETAIL = `${BASE_URL}tv/`

/* Home - PopularNow */
export const TRENDING_MOVIES = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
export const TRENDING_SERIES = `${BASE_URL}trending/tv/day?api_key=${API_KEY}`;

/* Home - TheatreMovies */
export const THEATRE_MOVIES = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;

/* Home - UpcomingMovies */
export const UPCOMING_MOVIES = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;

/* Upcoming Page - Upcoming All with pagination */
export const UPCOMING_MOVIES_PAGINATE = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;

/* Search Result Page - pagination */
export const SEARCH_QUERY = `${BASE_URL}search/`;

export const fetcher = (...args) => fetch(...args).then(res => res.json())
