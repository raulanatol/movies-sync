export interface RawMovie {
  plays: number;
  last_watched_at: string;
  last_updated_at: string;
  movie: {
    title: string;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      imdb: string;
      tmdb: number;
    }
  }
}
