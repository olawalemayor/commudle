import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent, BookMarkedMoviesComponent } from '../pages';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
} from '@nebular/theme';

@NgModule({
  declarations: [BookMarkedMoviesComponent, MovieSearchComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    NbAutocompleteModule,
    HttpClientModule,
  ],
})
export class PageModule {}
