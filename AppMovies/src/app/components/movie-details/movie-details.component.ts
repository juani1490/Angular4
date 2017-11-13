//Dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

//Observale
import 'rxjs/add/operator/switchMap';

//Services
import { MovieService } from '../../services/movie.service';

//class
import { Movie } from '../../class/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.movieService.getMovie(+params.get('id')))
        .subscribe(movie => this.movie = movie);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.movieService.updateMovie(this.movie).then(() => this.goBack());
  }

}
