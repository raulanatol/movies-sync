interface Media {
  imdb?: string;
  tmdb?: number;
  trakt?: number
}

interface ConstructorParams {
  title: string;
  year: number;
  slug: string;
  lastWatchedAt: Date;
  lastUpdatedAt: Date;
  media: Media;
}

export class Movie {
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
}
