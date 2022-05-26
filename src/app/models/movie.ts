export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
}

export interface MovieResponse {
  Search: Movie[];
}
