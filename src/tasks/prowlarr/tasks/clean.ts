import * as prowlarr from "../services";

export const run = async () => {
  await Promise.all([
    prowlarr.downloadClient.removeAll({ internal: true }),
    prowlarr.application.removeAll({ internal: true }),
  ]);
};
