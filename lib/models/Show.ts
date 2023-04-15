import { Model } from './Model';
import { fromDateToString } from '../drivers/traktv/parsers';

interface Media {
  imdb?: string;
  tmdb?: number;
  trakt?: number;
  tvdv?: number;
  tvrage?: number;
}

export interface Season {
  number: number;
  episodes?: {
    number: number;
    plays: number;
  }[];
}

interface ConstructorParams {
  lastUpdatedAt: Date;
  lastWatchedAt: Date;
  media: Media;
  slug: string;
  title: string;
  year: number;
  seasons: Season[];
}

export class Show implements Model {
  lastUpdatedAt: Date;
  lastWatchedAt: Date;
  slug: string;
  title: string;
  year: number;
  seasons: Season[];
  media: Media;

  constructor(params: ConstructorParams) {
    this.title = params.title;
    this.year = params.year;
    this.slug = params.slug;
    this.lastWatchedAt = params.lastWatchedAt;
    this.lastUpdatedAt = params.lastUpdatedAt;
    this.media = params.media;
    this.seasons = params.seasons;
  }

  toJSON(): object {
    return {
      title: this.title,
      year: this.year,
      slug: this.slug,
      lastWatchedAt: fromDateToString(this.lastWatchedAt),
      lastUpdatedAt: fromDateToString(this.lastUpdatedAt),
      media: {
        imdb: this.media.imdb,
        tmdb: this.media.tmdb,
        trakt: this.media.trakt
      },
      seasons: this.seasons.map(season => ({
        number: season.number,
        episodes: season.episodes?.map(episode => ({
          number: episode.number,
          plays: episode.plays
        }))
      }))
    };
  }

  toMarkdown(): string {
    return `# ${this.title} (${this.year})`;
  }
}
