import { recordToFields } from '@servarr-api/formatters'
import { ApiError } from '@servarr-api/rest'

import sonarr from '@src/services/sonarr/services'
import prowlarr from '@src/services/prowlarr/services'
import * as yaml from '@src/yaml'

import { read } from '../config'

export const run = async () => {
  const config = read()

  try {
    await prowlarr.applications.create({
      body: {
        name: 'Sonarr',
        configContract: 'SonarrSettings',
        implementation: 'Sonarr',
        implementationName: 'Sonarr',
        syncLevel: 'fullSync',
        fields: recordToFields({
          baseUrl: 'http://sonarr:8989',
          prowlarrUrl: 'http://prowlarr:9696',
          apiKey: config.ApiKey,
        }),
      },
    })
  } catch (e) {
    const error: ApiError = e
    const errors = error.body

    const isUniqueError = errors?.some((e: { errorMessage: string }) => /should be unique/i.test(e.errorMessage))

    if (!isUniqueError) throw e
  }

  const configs = yaml.read()

  const hostConfig = await sonarr.config.host.details()

  await sonarr.config.host.update({
    body: {
      ...hostConfig,
      username: configs.sonarr.username,
      password: configs.sonarr.password,
      passwordConfirmation: configs.sonarr.password,
      authenticationMethod: 'forms',
      authenticationRequired: 'disabledForLocalAddresses',
    },
  })
}
