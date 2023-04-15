import { Trakttv } from './drivers/traktv/Trakttv';

interface APIConfig {
  lastSyncDate?: Date;
  trakttv?: {
    clientId: string;
    userId: string;
  };
}

export class API {
  private config: APIConfig;
  private tracktv?: Trakttv;

  constructor(config: APIConfig) {
    this.config = config;
  }

  get trakttv(): Trakttv {
    if (!this.config.trakttv) {
      throw new Error('Trakttv is not configured');
    }

    if (!this.tracktv) {
      this.tracktv = new Trakttv(
        this.config.trakttv.clientId,
        this.config.trakttv.userId,
        this.config.lastSyncDate);
    }

    return this.tracktv;
  }
}
