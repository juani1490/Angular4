//Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routes/app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

//Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

//Services
import { InMemoryDataService } from './services/in-memory-data.service';
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
