//Dpendencies
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

//class
import { Movie } from '../class/movie';

//Observavle
import 'rxjs/add/operator/toPromise';

@Injectable()
  export class MovieService {
   private movieUrl = 'api/movies';
   private headers = new Headers({'content-type' : 'application/json'});

   constructor(private http:Http){}

   private handleError(error: any): Promise<any>{
     console.error('an error ocurred', error);
     return Promise.reject(error.message || error);
   }

   getMovies(): Promise<Movie[]>{
     return this.http.get(this.movieUrl)
                .toPromise()
                .then(response => response.json() as Movie[])
                .catch(this.handleError);
   }

   getMovie(id: number): Promise<Movie>{
     const url = `${this.movieUrl}/${id}`;
     return this.http.get(url)
                .toPromise()
                .then(response => response.json() as Movie)
                .catch(this.handleError);
   }

   deleteMovie(id: number): Promise<void>{
     const url = `${this.movieUrl}/${id}`;
     return this.http.delete(url)
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
   }

   createMovie(title: string, year: number, duration: number, synopsis: string): Promise<Movie>{
     return this.http.post(this.movieUrl, JSON.stringify({title:title, year:year, duration:duration, synopsis:synopsis}), {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Movie)
                .catch(this.handleError);
   }

   updateMovie(movie: Movie): Promise<Movie>{
     const url = `${this.movieUrl}/${movie.id}`;
     return this.http.put(url, JSON.stringify(movie), {headers: this.headers})
                .toPromise()
                .then(() => movie)
                .catch(this.handleError);
   }




}
