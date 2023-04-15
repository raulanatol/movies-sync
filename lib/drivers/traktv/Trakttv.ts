import { Env } from '../../utils/Env';
import { Movie } from '../../models/Movie';
import { RawMovie } from './types';
import { lastUpdatedAtAfter } from './filters';
import { toMovie } from './parsers';

export class Trakttv {
  private clientId: string;

  constructor(clientId?: string) {
    const clientID = clientId || Env.get('TRAKT_CLIENT_ID');
    if (!clientID) {
      throw new Error('Trakt.tv client ID is required TRAKT_CLIENT_ID. See documentation for more info.');
    }
    this.clientId = clientID;
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

  async getWatchedMovies(userId: string, lastSyncDate = new Date()): Promise<Movie[]> {
    const rawMovies = await this.doRequest<RawMovie[]>(`https://api.trakt.tv/users/${userId}/watched/movies`);

    return rawMovies
      .filter(lastUpdatedAtAfter(lastSyncDate))
      .map(toMovie);
  }
}
