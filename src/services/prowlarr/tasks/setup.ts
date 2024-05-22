import prowlarr from '@src/services/prowlarr/services'

import * as yaml from '@src/yaml'

export const run = async () => {
  const configs = yaml.read()

  const hostConfig = await prowlarr.config.host.details()

  prowlarr.config.host.update({
    body: {
      ...hostConfig,
      username: configs.prowlarr.username,
      password: configs.prowlarr.password,
      passwordConfirmation: configs.prowlarr.password,
      authenticationMethod: 'forms',
      authenticationRequired: 'disabledForLocalAddresses',
    },
  })
}
