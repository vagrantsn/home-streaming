import * as prowlarr from "../services";

export const run = async () => Promise.all([
  prowlarr.downloadClient.removeAll({ retry: true }),
  prowlarr.application.removeAll({ retry: true }),
])
