import * as services from '@servarr-api/endpoints'
import buildClient from '@servarr-api/clients/client'

import * as applications from './applications'
import * as downloadclient from './downloadclient'

export const prowlarr = buildClient({
  ...services,
  downloadclient,
  applications,
})
