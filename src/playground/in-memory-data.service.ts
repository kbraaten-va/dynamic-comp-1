import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    let data = {
      "hello": "world"
    };
    return {data};
  }
}
