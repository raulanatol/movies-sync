import { Model } from './Model';
import { fromDateToString } from '../drivers/traktv/parsers';

interface Media {
  imdb?: string;
  tmdb?: number;
  trakt?: number;
}

interface ConstructorParams {
  title: string;
  year: number;
  slug: string;
  lastWatchedAt: Date;
  lastUpdatedAt: Date;
  media: Media;
}

export class Movie implements Model {
  title: string;
  year: number;
  slug: string;
  lastWatchedAt: Date;
  lastUpdatedAt: Date;
  media: Media;

  constructor(params: ConstructorParams) {
    this.title = params.title;
    this.year = params.year;
    this.slug = params.slug;
    this.lastWatchedAt = params.lastWatchedAt;
    this.lastUpdatedAt = params.lastUpdatedAt;
    this.media = params.media;
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
      }
    };
  }

  toMarkdown(): string {
    return `# ${this.title} (${this.year})`;
  }
}
