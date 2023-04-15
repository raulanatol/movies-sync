import {Trakttv} from "./drivers/traktv/Trakttv";

export const API = ({
  trakttv: (clientId?: string) => new Trakttv(clientId)
});
