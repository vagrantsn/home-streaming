import * as services from '@servarr-api/endpoints'
import buildClient from '@servarr-api/clients/client'

export const sonarr = buildClient(services)
