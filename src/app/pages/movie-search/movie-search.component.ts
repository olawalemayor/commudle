import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';

@Component({
  templateUrl: 'movie-search.component.html',
  styleUrls: ['movie-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  filteredOptions$!: Observable<Movie[]>;

  @ViewChild('autoInput') input: any;

  bookmarkMovie(movie: string) {
    const movies = sessionStorage.getItem('bookmarkedMovies');
    if (movies?.length) {
      let bookmarkedMovies = JSON.parse(movies);
      bookmarkedMovies.push(movie);
      sessionStorage.setItem(
        'bookmarkedMovies',
        JSON.stringify(bookmarkedMovies)
      );
    } else {
      sessionStorage.setItem('bookmarkedMovies', JSON.stringify([movie]));
    }
  }

  onChange() {
    this.filteredOptions$ = this.movieService.searchMovie(
      this.input.nativeElement.value
    );
  }

  onSelectionChange($event: any) {
    this.filteredOptions$ = this.movieService.searchMovie($event);
  }

  ngOnInit(): void {
    document.title = 'Movies Search';
  }
}
