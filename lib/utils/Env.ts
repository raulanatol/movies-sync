import * as dotenv from 'dotenv';

const EnvVariables = <const>[
  'TRAKT_CLIENT_ID'
];

type EnvVariable = typeof EnvVariables[number];

export class Env {
  private static instance: Env;

  private constructor() {
    dotenv.config();
  }

  static getInstance(): Env {
    if (!this.instance) {
      this.instance = new Env();
    }
    return this.instance;
  }

  private get(variable: EnvVariable): string | undefined {
    return process.env[variable];
  }

  static get(variable: EnvVariable): string | undefined {
    return Env.getInstance().get(variable);
  }
}
