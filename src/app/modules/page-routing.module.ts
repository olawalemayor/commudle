import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMarkedMoviesComponent, MovieSearchComponent } from '../pages';

const routes: Routes = [
  { path: 'bookmarks', component: BookMarkedMoviesComponent },
  { path: '', component: MovieSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
