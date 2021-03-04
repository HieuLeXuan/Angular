import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.class';

@Component({
  selector: 'app-movie-add-edit',
  templateUrl: './movie-add-edit.component.html',
  styleUrls: ['./movie-add-edit.component.scss']
})
export class MovieAddEditComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  addMovie(name: string, link: string, author: string) {
    let movie = new Movie(null, name, link, author);
    this.movieService.addMovie(movie);
  }

}
