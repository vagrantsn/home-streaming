import { ApiError } from '../../../request';
import * as prowlarr from '../../prowlarr/services';

import { read } from '../config'

export const run = async () => {
  const config = read()

  try {
    await prowlarr.application.create({
      name: 'Sonarr',
      configContract: 'SonarrSettings',
      implementation: 'Sonarr',
      implementationName: 'Sonarr',
      fields: {
        baseUrl: 'http://sonarr:8989',
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
