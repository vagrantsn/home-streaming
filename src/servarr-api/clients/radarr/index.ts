import * as services from '@servarr-api/endpoints'
import buildClient from '@servarr-api/clients/client'

export const radarr = buildClient(services)
