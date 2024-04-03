import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { GenreComponent } from './genre/genre.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import {RatingModule} from 'ng-starrating'
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent, GenreComponent, CartPageComponent, MoviePageComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RatingModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
