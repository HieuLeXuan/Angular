import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    new Movie(1, 'Lac Troi', 'https://www.youtube.com/watch?v=Llw9Q6akRo4', 'Son Tung MTP'),
    new Movie(2, 'Anh Yeu Em', 'https://www.youtube.com/watch?v=V_HDaCwDtqAhttps://www.youtube.com/watch?v=Llw9Q6akRo4', 'Khac Viet')
  ];

  constructor() { }

  getAllMovie() {
    return this.movies;
  }

  addMovie(movie: Movie) {
    movie.id = this.getLastId(this.movies);
    this.movies.push(movie)
  }

  getLastId(movies) {
    let lastId = movies.length > 0 ? movies.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else if (a.id < b.id) {
        return 1;
      } else {
        return 0;
      }
    })[0].id + 1 : 1;
    console.log(movies);
    return lastId;
  }

}
