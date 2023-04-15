import { fromStringToDate } from './parsers';

export const lastUpdatedAtAfter =
  (lastSyncDate: Date) =>
    ({ last_updated_at }: { last_updated_at: string }): boolean =>
      fromStringToDate(last_updated_at).getTime() > lastSyncDate.getTime();

