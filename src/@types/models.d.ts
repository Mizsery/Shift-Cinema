enum Profession {
  ACTOR = 'ACTOR',
  DIRECTOR = 'DIRECTOR'
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

type hallName = 'Red' | 'Blue' | 'Green';

enum PlaceType {
  Econom = 'ECONOM',
  Blocked = 'BLOCKED',
  Comfort = 'COMFORT'
}

interface Seances {
  time: string;
  hall: {
    name: hallName;
    places: {
      price: number;
      type: PlaceType;
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
  date: string;
  seances: Seances[];
}

interface FilmSeances {
  date: string;
  seances: Record<hallName, Seances[]> & {
    [key: string]: Seances[];
  };
}

interface FilmActiveTime {
  time: string;
  hall: string;
}

interface FilmActiveDate {
  index: number;
  date: string;
}

interface FilmPlaces {
  index: string;
  row: number;
  place: number;
}
