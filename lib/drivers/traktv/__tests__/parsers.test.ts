import { describe, expect, it } from 'vitest';
import { toMovie } from '../parsers';
import { RawMovie } from '../types/RawMovie';

const getRawMovie = (): RawMovie => ({
  plays: 1,
  last_watched_at: '2019-01-01T00:00:00.000Z',
  last_updated_at: '2019-01-01T00:00:00.000Z',
  movie: {
    title: 'The Dark Knight',
    year: 2008,
    ids: {
      trakt: 120,
      slug: 'the-dark-knight-2008',
      imdb: 'tt0468569',
      tmdb: 155
    }
  }
});

describe('parsers', () => {
  describe('toMovie', () => {
    it('should parse the slug with no movie year', () => {
      const rawMovie = getRawMovie();
      expect(toMovie(rawMovie).slug).toBe('the-dark-knight');
    });

    it('should not remove the year of the name of the movie', () => {
      const rawMovie = getRawMovie();
      rawMovie.movie.ids.slug = '2001-a-space-odyssey-1968';
      rawMovie.movie.year = 1968;

      expect(toMovie(rawMovie).slug).toBe('2001-a-space-odyssey');
    });

    it('should parse the movie correctly', () => {
      const rawMovie = getRawMovie();
      expect(toMovie(rawMovie)).toEqual({
        title: 'The Dark Knight',
        year: 2008,
        slug: 'the-dark-knight',
        media: {
          imdb: 'tt0468569',
          tmdb: 155,
          trakt: 120
        },
        lastWatchedAt: new Date('2019-01-01T00:00:00.000Z'),
        lastUpdatedAt: new Date('2019-01-01T00:00:00.000Z')
      });
    });
  });
});
