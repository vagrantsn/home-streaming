import * as prowlarr from '../../prowlarr/services';
import * as sonarr from '../../sonarr/services';
import * as radarr from '../../radarr/services';

const payload = {
  name: 'Transmission',
  implementation: 'Transmission',
  implementationName: 'Transmission',
  configContract: 'TransmissionSettings',
  fields: {
    host: 'transmission',
    port: 9091,
    username: 'admin',
    password: 'admin',
  }
}

export const run = async () => {
  await Promise.all([
    prowlarr.downloadClient.removeAll(),
    sonarr.downloadclient.removeAll(),
    radarr.downloadclient.removeAll(),
  ])

  await Promise.all([
    prowlarr.downloadClient.create(payload),
    sonarr.downloadclient.create(payload),
    radarr.downloadclient.create(payload),
  ])
}
