const movies = {};

export const getTheMovies = (state = movies, action) => {
  switch (action.type) {
    case "fetchNetflixOriginals":
      return {
        ...state,
        NetflixOriginals: action.payload,
      };
    case "fetchTrending":
      return {
        ...state,
        Trending: action.payload,
      };
    case "fetchTopRated":
      return {
        ...state,
        TopRated: action.payload,
      };
    case "fetchActionMovies":
      return {
        ...state,
        ActionMovies: action.payload,
      };
    case "fetchComedyMovies":
      return {
        ...state,
        ComedyMovies: action.payload,
      };
    case "fetchHorrorMovies":
      return {
        ...state,
        HorrorMovies: action.payload,
      };
    case "fetchRomanceMovies":
      return {
        ...state,
        RomanceMovies: action.payload,
      };
    case "fetchDocumentaries":
      return {
        ...state,
        Documentaries: action.payload,
      };
    default:
      return state;
  }
};
