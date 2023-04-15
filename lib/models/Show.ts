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

export class Show {
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
}
