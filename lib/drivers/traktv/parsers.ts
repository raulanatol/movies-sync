import {RawMovie} from "./types";
import {Movie} from "../../models/Movie";

export const fromDateToString = (date: Date): string => {
  return date.toISOString();
}

export const fromStringToDate = (date: string): Date => {
  return new Date(date);
}


export const toMovie = (rawMovie: RawMovie): Movie =>
  new Movie({
    title: rawMovie.movie.title,
    year: rawMovie.movie.year,
    slug: rawMovie.movie.ids.slug,
    media: {
      imdb: rawMovie.movie.ids.imdb,
      tmdb: rawMovie.movie.ids.tmdb,
      trakt: rawMovie.movie.ids.trakt
    },
    lastWatchedAt: fromStringToDate(rawMovie.last_watched_at),
    lastUpdatedAt: fromStringToDate(rawMovie.last_updated_at)
  })
