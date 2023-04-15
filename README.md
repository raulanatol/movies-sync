# movies-sync

## Installing

```shell
npm install @raulanatol/movies-sync
```

## Supported APIs

- [x] Trakt.tv

## Configuration properties

| API      | Variable          | Description        | URL                            |
|----------|-------------------|--------------------|--------------------------------|
| Trakt.tv | `TRAKT_CLIENT_ID` | Trakt.tv client id | https://trakt.docs.apiary.io/# |
| Trakt.tv | `TRAKT_USER_ID`   | Trakt.tv user id   |                                |



## Usage

```js
import { API } from '@raulanatol/movies-sync';

const api = new API({
  lastSyncDate: '',    // Optional last sync date Date object
  trakttv: {
    clientId: process.env.TRAKT_CLIENT_ID,
    userId: process.env.TRAKT_USER_ID
  }
});

const movies = await api.getMovies();
```
