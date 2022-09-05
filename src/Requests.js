// API key

const API_KEY = '191d216958140cd776e116dfbb3d3a15';

const requests = {
    fetchTrending: `/trending/all-week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&width_genres=99`,

};

export default requests;