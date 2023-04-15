import { Movie } from '../../models/Movie';
import { lastUpdatedAtAfter } from './filters';
import { toMovie, toShow } from './parsers';
import { Show } from '../../models/Show';
import { RawMovie } from './types/RawMovie';
import { RawShow } from './types/RawShow';

const baseURL = 'https://api.trakt.tv';

export class Trakttv {
  private readonly clientId: string;
  private readonly userId: string;
  private readonly lastSyncDate?: Date;

  constructor(clientId: string, userId: string, lastSyncDate?: Date) {
    this.clientId = clientId;
    this.userId = userId;
    this.lastSyncDate = lastSyncDate;
  }

  private doRequest<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'trakt-api-version': '2',
          'trakt-api-key': this.clientId
        }
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  async getWatchedMovies(): Promise<Movie[]> {
    const rawMovies = await this.doRequest<RawMovie[]>(`${baseURL}/users/${this.userId}/watched/movies`);

    if (!this.lastSyncDate) {
      return rawMovies.map(toMovie);
    }

    return rawMovies
      .filter(lastUpdatedAtAfter(this.lastSyncDate))
      .map(toMovie);
  }

  async getWatchedShows(): Promise<Show[]> {
    const rawShows = await this.doRequest<RawShow[]>(`${baseURL}/users/${this.userId}/watched/shows`);
    if (!this.lastSyncDate) {
      return rawShows.map(toShow);
    }

    return rawShows
      .filter(lastUpdatedAtAfter(this.lastSyncDate))
      .map(toShow);
  }
}
