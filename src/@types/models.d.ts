enum Profession {
  ACTOR = 'ACTOR',
  DIRECTOR = 'DIRECTOR'
}

enum TypePlaces {
  ECONOM = 'ECONOM',
  BLOCKED = 'BLOCKED',
  COMFORT = 'COMFORT'
}

interface Actors {
  id: string;
  professions: Profession[];
  fullName: string;
}

interface Directors {
  id: string;
  fullName: string;
  profession: Profession[];
}

interface Film {
  id: string;
  name: string;
  originalName: string;
  description: string;
  actors: Actors[];
  directors: Directors[];
  runtime: number;
  ageRating: string;
  genres: string[];
  releaseDate: string;
  userRatings: {
    kinopoisk: string;
    imdb: string;
  };
  img: string;
  country: {
    id: number;
    code: string;
    code2: string;
    name: string;
  };
}

interface Seances {
  time: string;
  hall: {
    name: string;
    places: {
      price: number;
      type: TypePlaces;
    }[][];
  };
  payedTickets: {
    filmId: string;
    row: number;
    column: number;
    seance: {
      date: string;
      time: string;
    };
    phone: string;
  }[];
}

interface FilmSchedule {
  schedules: {
    date: string;
    seances: Seances[];
  };
}
