import prowlarr from '../services'

export const run = async () => Promise.all([
  prowlarr.downloadclient.removeAll({ retry: true }),
  prowlarr.applications.removeAll({ retry: true }),
])
