import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Movies } from '../shared/models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  movies: Movies[] = [];
  constructor(private ms: MovieService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem'])
        this.movies = this.ms
          .getAll()
          .filter((movie) =>
            movie.title
              .toLowerCase()
              .includes(params['searchItem'].toLowerCase())
          );
      else if (params['genre'])
        this.movies = this.ms.getAllMoviesByGenre(params['genre']);
      else this.movies = this.ms.getAll();
    });
  }
}
