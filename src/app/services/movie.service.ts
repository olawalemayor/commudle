import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse, Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  url = `${environment.apiUrl}/?apikey=${environment.apiKey}`;

  private apiURL = `${this.url}&s=/`; //https://localhost:8080 on development

  searchMovie(movie: string): Observable<Movie[]> {
    return movie
      ? this._http
          .get<MovieResponse>(this.apiURL + movie)
          .pipe(map((res) => res.Search))
      : of<any>();
  }
}
