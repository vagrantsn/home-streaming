import * as radarr from '../services'

export const run = async () => Promise.all([
  radarr.health.status({ retry: true }),
])
