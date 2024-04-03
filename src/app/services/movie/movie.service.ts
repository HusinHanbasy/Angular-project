import { Injectable } from '@angular/core';
import { Movies } from '../../shared/models/movie';
import { Genres } from '../../shared/models/genre';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovieById(id: number): Movies {
    return this.getAll().find((el) => el.id == id)!;
  }

  getAllGenres(): Genres[] {
    return [
      { name: 'All' },
      { name: 'action' },
      { name: 'comedy' },
      { name: 'adventure' },
      { name: 'horor' },
      { name: 'drama' },
      { name: 'thrill' },
    ];
  }

  getAllMoviesByGenre(genre: string): Movies[] {
    return genre == 'All'
      ? this.getAll()
      : this.getAll().filter((movie) => movie.genre?.includes(genre));
  }

  getAll(): Movies[] {
    return [
      {
        id: 1,
        title: 'Kingdom Planet Apes',
        genre: 'action',
        description:
          "The new Apes movie is set many years after the conclusion of 2017's War for the Planet of the Apes. Many apes societies have grown from when the Moses-like Caesar brought his people to an oasis, while humans have been reduced to a feral-like existence. Some ape groups have never heard of Caesar, while others have contorted his teaching to build burgeoning empires. In this setting, one ape leader begins to enslave other groups to find human technology, while another ape, who watched his clan be taken, embarks on a journey to find freedom. A young human woman becomes key to the latter's quest, although she has plans of her own.",
        recomended: false,
        star: '⭐⭐⭐⭐⭐',
        duration: '1:40',
        language: 'english',
        imageUrl: '/assets/kpa.jpeg',
        director: 'Wes ball',
        origin: 'United States',
        release: 'may 10,2024',
        price: 35000,
      },
      {
        id: 2,
        title: 'Agak Laen',
        genre: 'comedy',
        description:
          "In pursuit of their dream of changing their fate, four friends who guard a haunted house at a night market look for new ways to scare visitors to escape bankruptcy. Unfortunately, Bene, Jegel, Boris and Oki's efforts resulted in the death of one of their visitors. Panicking, they buried the victim in a haunted house. Unexpectedly, the victim's spirit wanders around, making the haunted house scary and busy with visitors. When the police started investigating, they were forced to carry out various ridiculous conspiracies to cover up the real incident. What will happen to them next?",
        recomended: false,
        star: '⭐⭐⭐⭐☆',
        duration: '1.30',
        language: 'indonesia',
        imageUrl: '/assets/movie1.png',
        director: 'Muhadkly acho',
        origin: 'indonesia',
        release: 'february 1,2024',
        price: 35000,
      },
      {
        id: 3,
        title: '24 Hours with Gaspar',
        genre: 'action',
        description:
          'Gaspar, a somewhat punk amateur detective, investigates a government-involved mass slaughter case. During the process, he stumbles upon clues about his friend who disappeared without a trace during childhood and traces a human trafficking villain. However, due to a malfunctioning artificial heart, Gaspar has only twenty-four hours left to live. With little time remaining, aided by friends Agnes and Kick, he seeks to exact revenge.',
        recomended: false,
        star: '⭐⭐⭐⭐⭐',
        duration: '1:40',
        language: 'indonesia',
        imageUrl: '/assets/movie2.jpeg',
        director: 'Yosep Anggi Noen',
        origin: 'indonesia',
        release: 'march 14,2024',
        price: 35000,
      },
      {
        id: 4,
        title: 'Ali Topan',
        genre: 'action',
        description:
          "From a tumultuous family background, Ali Topan chooses to spend his time on the streets of Blok M and at the Art Stall under the guidance of Opung Brotpang along with his gang, Dudung, Bobby, and Gevaert. His encounter with Anna Karenina, the daughter of a prominent property business family, adds color to Ali Topan's life. Ali and Anna fall in love, but unfortunately, their relationship is strongly opposed by Anna's parents. Unbridled disappointment drives Ali and Anna to embark on an adventure, traversing the streets across the island of Java in search of a new future. However, on their journey, many parties attempt to track them down and hunt them, including Boy, who disapproves of Ali and Anna's togetherness. Ali Topan is accused of being the mastermind behind the turmoil at the Art Stall and the kidnapping of Anna. Can the courage of Ali Topan and Anna Karenina overcome everyone who opposes them? Will Ali Topan continue to be with Anna Karenina?",
        recomended: false,
        star: '⭐⭐⭐⭐⭐',
        duration: '1:40',
        language: 'indonesia',
        imageUrl: '/assets/movie4.jfif',
        director: 'Sidarta Tata',
        origin: 'indonesia',
        release: 'february 14,2024',
        price: 35000,
      },
      {
        id: 5,
        title: 'Pemukiman Setan',
        genre: 'horor',
        description:
          "Under economic pressure, Alin pushes Ghani to join him with Fitrah and Zia to rob an antique house. Everything runs smoothly until they find a shackled woman, Sukma, in the basement. Having thoughts that she is an abused victim, they save her without knowing the aftermath. With the help of Urip, a paranormal trapped within, they know that Sukma was possessed by Mbah Sarap, a vengeful spirit. In a blink, the terror circle runs amok over a deadly curse in Sukma's bloodline, that can only be stopped by an ancient dagger hidden somewhere beyond the ultimate quest of the chosen one.",
        recomended: false,
        star: '⭐⭐⭐⭐☆',
        duration: '1:40',
        language: 'indonesia',
        imageUrl: '/assets/movie5.jfif',
        director: 'Carles Gozhali',
        origin: 'indonesia',
        release: 'january 25,2024',
        price: 35000,
      },
      {
        id: 6,
        title: 'Madame Web',
        genre: 'adventure',
        description:
          "In a switch from the typical genre, Madame Web tells the standalone origin story of one of Marvel publishing's most enigmatic heroines. The suspense-driven thriller stars Dakota Johnson as Cassandra Webb, a paramedic in Manhattan who develops the power to see the future... and realizes she can use that insight to change it. Forced to confront revelations about her past, she forges a relationship with three young women bound for powerful destinies...if they can all survive a deadly present.",
        recomended: false,
        star: '⭐⭐⭐⭐☆',
        duration: '1:40',
        language: 'english',
        imageUrl: '/assets/movie6.jfif',
        director: 'S.J. Clarkson',
        origin: 'United States',
        release: 'february 14,2024',
        price: 35000,
      },
      {
        id: 7,
        title: 'The Beekeeper',
        genre: 'action',
        description:
          "Adam Clay is a beekeeper, but someone very important to him is scammed and driven to harm. However, what these power and money hungry scammers don't know, is that Clay is an agent in a classified program called Beekeepers, and they underestimate how much of a threat he is. Adam sets out on a quest of vengeance, where he hunts and kills those responsible for the incident.",
        recomended: false,
        star: '⭐⭐⭐⭐⭐',
        duration: '1:40',
        language: 'english',
        imageUrl: '/assets/movie33.jfif',
        director: 'David Ayer',
        origin: 'United States',
        release: 'january 12,2024',
        price: 35000,
      },
      {
        id: 8,
        title: 'Sehidup Semati',
        genre: 'horor',
        description:
          "Renata, a gentle woman who grew up in a very religious family who was instilled by her mother that the nature of a wife is to serve her husband and maintain the integrity of the household. Problems arose in her household when Renata suspected that Edwin, her husband, was having an affair with another woman. Renata feels she has to fight for her household. It is Asmara, a sexy and vulgar woman, the new neighbor next door to her apartment unit who tries to help Renata. Until Renata finally found out that the woman she believed Edwin was having an affair with was Ana, a woman who had been declared missing and whose whereabouts were being sought. After that, Renata was shadowed and terrorized by the presence of Ana. Her husband's attitude became increasingly cold and distant from her. In the midst of all kinds of strange things that terrorize her, Renata's only determination is to save her household.",
        recomended: false,
        star: '⭐⭐⭐☆☆',
        duration: '1:40',
        language: 'Indonesia',
        imageUrl: '/assets/sehidupsemati.jpg',
        director: 'David Ayer',
        origin: 'Indonesia',
        release: 'january 11,2024',
        price: 35000,
      },
    ];
  }
}
