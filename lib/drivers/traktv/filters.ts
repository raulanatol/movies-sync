import { RawMovie } from './types';
import { fromStringToDate } from './parsers';

export const lastUpdatedAtAfter =
  (lastSyncDate: Date) =>
    (movie: RawMovie): boolean =>
      fromStringToDate(movie.last_updated_at).getTime() > lastSyncDate.getTime();
