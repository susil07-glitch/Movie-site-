import { Api_key } from "../Geners/Geners";

 export const  baseURL='https://api.themoviedb.org/3/'


export const TopRated = `movie/top_rated?api_key=${Api_key}&language=en-US`;
export const originals = `discover/tv?api_key=${Api_key}&with_networks=213&sort_by=popularity.desc&language=en-US`;
export const action = `discover/movie?api_key=${Api_key}&with_genres=28`;
export const comedy = `discover/movie?api_key=${Api_key}&with_genres=35`;
export const horror = `discover/movie?api_key=${Api_key}&with_genres=27`;
export const Adventure = `discover/movie?api_key=${Api_key}&with_genres=12`;
export const SciFi = `discover/movie?api_key=${Api_key}&with_genres=878`;
export const Animated = `discover/movie?api_key=${Api_key}&with_genres=16`;
export const War = `discover/movie?api_key=${Api_key}&with_genres=10752`;
export const trending = `trending/all/week?api_key=${Api_key}&sort_by=popularity.desc&language=en-US`;
export const trendingSeries = `trending/tv/week?api_key=${Api_key}&sort_by=popularity.desc&language=en-US`;
export const UpcomingMovies = `/movie/upcoming?api_key=${Api_key}&language=en-US`;
