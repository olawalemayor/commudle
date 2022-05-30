import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MovieResponse, Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  private apiURL = 'http://localhost:8080/search/';

  searchMovie(movie: string): Observable<Movie[]> {
    return movie
      ? this._http
          .get<MovieResponse>(this.apiURL + movie)
          .pipe(map((res) => res.Search))
      : of<any>();
  }
}
