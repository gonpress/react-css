import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "b3b5ab627711c1655ace277766e50327",
        language: "en-US",
        page: "1",
    }
})

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    popular: () => api.get("movie/popular"),
    upcoming: () => api.get("movie/upcoming"),
}

export const tvsApi = {
    onTheAir: () => api.get("tv/on_the_air"),
    popular: () => api.get("tv/popular"),
    latest: () => api.get("tv/latest"),
}