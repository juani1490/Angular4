//Dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { MoviesComponent } from '../components/movies/movies.component';
import { MovieDetailsComponent }  from '../components/movie-details/movie-details.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'detail/:id', component: MovieDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/movies' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {}
