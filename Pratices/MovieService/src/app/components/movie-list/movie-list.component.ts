import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getAllMovie();
  }

}
