import { DownloadClientPayload } from "@servarr-api/services/downloadclient";
import { recordToFields } from "@servarr-api/formatters";

import prowlarr from "../../prowlarr/services";
import sonarr from "../../sonarr/services";
import radarr from "../../radarr/services";

const payload: DownloadClientPayload = {
  enable: true,
  priority: 0,
  protocol: "torrent",
  removeCompletedDownloads: false,
  removeFailedDownloads: false,
  name: "Transmission",
  implementation: "Transmission",
  implementationName: "Transmission",
  configContract: "TransmissionSettings",
  fields: recordToFields({
    host: "transmission",
    port: 9091,
    username: "admin",
    password: "admin",
    useSsl: false,
    priority: 0,
    initialState: 0,
    sequentialOrder: false,
    firstAndLast: false,
    contentLayout: 0,
  }),
};

export const run = async () => {
  await Promise.all([
    prowlarr.downloadclient.removeAll(),
    sonarr.downloadclient.removeAll(),
    radarr.downloadclient.removeAll(),
  ]);

  await Promise.all([
    prowlarr.downloadclient.create({
      body: {
        ...payload,
        categories: [],
        supportsCategories: true,
      },
    }),

    sonarr.downloadclient.create({
      body: {
        ...payload,
        fields: [
          ...payload.fields,
          ...recordToFields({
            category: "sonarr",
          }),
        ],
      },
    }),

    radarr.downloadclient.create({
      body: {
        ...payload,
        fields: [
          ...payload.fields,
          ...recordToFields({
            category: "radarr",
          }),
        ],
      },
    }),
  ]);
};
