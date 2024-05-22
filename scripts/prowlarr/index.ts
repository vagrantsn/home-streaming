import * as torrentClients from "./torrent-client";

export const setup = () => Promise.all([torrentClients.run()]);
