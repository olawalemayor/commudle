import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css'],
})
export class BookMarkedMoviesComponent implements OnInit {
  bookmarks = [];

  ngOnInit(): void {
    const bookmarkedMovies = sessionStorage.getItem('bookmarkedMovies');

    if (bookmarkedMovies) this.bookmarks = JSON.parse(bookmarkedMovies);
  }
}
