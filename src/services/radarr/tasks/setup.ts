import { ApiError } from "@servarr-api/rest"
import { recordToFields } from '@servarr-api/formatters'

import { read } from "../config"
import prowlarr from '@src/services/prowlarr/services'
import radarr from '@src/services/radarr/services'

import * as yaml from '@src/yaml'

export const run = async () => {
  const config = read()

  try {
    await prowlarr.applications.create({
      body: {
        name: 'Radarr',
        configContract: 'RadarrSettings',
        implementation: 'Radarr',
        implementationName: 'Radarr',
        syncLevel: 'fullSync',
        fields: recordToFields({
          baseUrl: 'http://radarr:7878',
          prowlarrUrl: 'http://prowlarr:9696',
          apiKey: config.ApiKey,
        }),
      }
    })
  } catch (e) {
    const error: ApiError = e
    const errors = error.body

    const isUniqueError = errors?.some((e: { errorMessage: string }) => /should be unique/i.test(e.errorMessage))

    if (!isUniqueError) throw e
  }

  const configs = yaml.read()

  const hostConfig = await radarr.config.host.details()

  radarr.config.host.update({
    body: {
      ...hostConfig,
      username: configs.radarr.username,
      password: configs.radarr.password,
      passwordConfirmation: configs.radarr.password,
      authenticationMethod: 'forms',
      authenticationRequired: 'disabledForLocalAddresses',
    },
  })
}
