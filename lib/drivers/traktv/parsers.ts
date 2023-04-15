import { Movie } from '../../models/Movie';
import { RawMovie } from './types/RawMovie';
import { Season, Show } from '../../models/Show';
import { RawSeason, RawShow } from './types/RawShow';

export const fromDateToString = (date: Date): string => {
  return date.toISOString();
};

export const fromStringToDate = (date: string): Date => {
  return new Date(date);
};

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
  });

export const toSeason = (rawSeason: RawSeason): Season => ({
  number: rawSeason.number,
  episodes: rawSeason.episodes.map(episode => ({
    number: episode.number,
    plays: episode.plays
  }))
});

export const toShow = (rawShow: RawShow): Show =>
  new Show({
    lastWatchedAt: fromStringToDate(rawShow.last_watched_at),
    lastUpdatedAt: fromStringToDate(rawShow.last_updated_at),
    title: rawShow.show.title,
    year: rawShow.show.year,
    slug: rawShow.show.ids.slug,
    media: {
      imdb: rawShow.show.ids.imdb,
      tmdb: rawShow.show.ids.tmdb,
      trakt: rawShow.show.ids.trakt,
      tvdv: rawShow.show.ids.tvdb,
      tvrage: rawShow.show.ids.tvrage
    },
    seasons: rawShow.seasons.map(toSeason)
  });
