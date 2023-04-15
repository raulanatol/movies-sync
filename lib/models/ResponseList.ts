import { Model } from './Model';

export class ResponseList<T extends Model> {
  data: T[];

  constructor(data: T[]) {
    this.data = data;
  }

  toJSON(): object[] {
    return this.data.map(item => item.toJSON());
  }

  toMarkdown(): string[] {
    return this.data.map(item => item.toMarkdown());
  }

  static from<T extends Model>(data: T[]) {
    return new ResponseList(data);
  }

  static empty() {
    return new ResponseList([]);
  }
}
