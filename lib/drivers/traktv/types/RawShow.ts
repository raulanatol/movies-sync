export interface RawSeason {
  number: number;
  episodes: {
    number: number;
    plays: number;
    last_watched_at: string;
  }[];
}

export interface RawShow {
  plays: number;
  last_watched_at: string;
  last_updated_at: string;
  show: {
    title: string;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      tvdb: number;
      imdb: string;
      tmdb: number;
      tvrage: number;
    }
  },
  seasons: RawSeason[];
}
