import { ApiError } from "../../../request"
import { read } from "../config"
import * as prowlarr from '../../prowlarr/services'

export const run = async () => {
  const config = read()

  try {
    await prowlarr.application.create({
      name: 'Radarr',
      configContract: 'RadarrSettings',
      implementation: 'Radarr',
      implementationName: 'Radarr',
      fields: {
        baseUrl: 'http://radarr:7878',
        prowlarrUrl: 'http://prowlarr:9696',
        apiKey: config.ApiKey,
      },
    })
  } catch (e) {
    const error: ApiError = e
    const errors = error.body

    const isUniqueError = errors?.some((e: { errorMessage: string }) => /should be unique/i.test(e.errorMessage))

    if (!isUniqueError) throw e
  }
}
