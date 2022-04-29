// api key  -   19f84e11932abbc79e6d83f82d6d1045

const API_KEY = "19f84e11932abbc79e6d83f82d6d1045"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchMovieLatest: `/movie/latest?api_key=${API_KEY}`,
    fetchActionMovie: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchBest: `/discover/movie?api_key=${API_KEY}&primary_release_year=2020&sort_by=vote_average.desc&language=en-US`,
    fetchLatestTv: `/tv/latest?api_key=${API_KEY}&language=en-US`,
    fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-US`
}

export default requests