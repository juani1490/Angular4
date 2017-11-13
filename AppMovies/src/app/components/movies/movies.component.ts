//Dependencies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;

//class
import { Movie } from '../../class/movie';

//Services
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'my-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  num:number = 0;

  constructor(
    private router: Router,
    private movieService: MovieService
  ) {}


  ngOnInit():void {
    this.getMovies();
  }

  slide(): void{
    if (this.num == 0) {
      $(".listMovies").slideToggle();
      $("#btn-slide").text('Hide Movies');
      this.num = 1;
      console.log(this.num);
    }

    if (this.num == 1) {
      $("#btn-slide").text('Show Movies');
      this.num = 0;
      console.log(this.num);
    }

  }

  getMovies():void{
     this.movieService.getMovies().then(movies => this.movies = movies)
  }

  onSelected(movie: Movie):void{
    this.selectedMovie = movie;
  }

  getMovieDetail():void{
   this.router.navigate(['/detail', this.selectedMovie.id]);
  }

  add(title:string, year:number, duration:number, synopsis:string):void{
    title = title.trim();
    if (!title && !year && !duration && !synopsis) {return;}
    this.movieService.createMovie(title,year,duration,synopsis)
        .then(movie => {
          this.movies.push(movie);
          this.selectedMovie = null
        })
  }

  delete(movie : Movie):void{
    this.movieService.deleteMovie(movie.id)
        .then(() => {
          this.movies = this.movies.filter(m => m !== movie);
          if (this.selectedMovie === movie) {this.selectedMovie = null;}
        });
  }

}
