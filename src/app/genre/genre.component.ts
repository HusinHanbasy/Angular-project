import { Component, OnInit } from '@angular/core';
import { Genres } from '../shared/models/genre';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.scss',
})
export class GenreComponent implements OnInit {
  genres: Genres[] = [];
  constructor(private ms: MovieService) {}
  ngOnInit(): void {
    this.genres = this.ms.getAllGenres();
  }
}
