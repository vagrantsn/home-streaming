import * as service from "./service";

type DownloadClientPayload = {
  enable: boolean;
  protocol: string;
  priority: number;
  categories: unknown[];
  supportsCategories: boolean;
  name: string;
  fields: Record<string, string | number | boolean>[];
  implementationName: string;
  implementation: string;
  configContract: string;
  infoLink: string;
  tags: string[];
};

const addClient = (payload: DownloadClientPayload) =>
  service.post({
    path: "http://localhost:9696/api/v1/downloadclient",
    body: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  });

const addQBittorrent = () => {
  const fields: DownloadClientPayload['fields'] = Object.entries({
    host: 'qbittorrent',
    port: 8080,
    useSsl: false,
    username: 'admin',
    category: 'prowlarr',
    priority: 0,
    initialState: 0,
    sequentialOrder: false,
    firstAndLast: false,
    contentLayout: 0,
  }).map(([name, value]) => ({
    name,
    value,
  }))

  return addClient({
    enable: true,
    protocol: 'torrent',
    priority: 1,
    categories: [],
    supportsCategories: true,
    name: 'qBittorrent',
    fields,
    implementationName: 'qBittorrent',
    implementation: 'QBittorrent',
    configContract: 'QBittorrentSettings',
    infoLink: 'https://wiki.servarr.com/prowlarr/supported#qbittorrent',
    tags: [],
  })
}

export const run = async () => {
  await addQBittorrent()
}
