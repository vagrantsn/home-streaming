import { radarr } from '@servarr-api'

import { read } from '../config'

const client = radarr({
  host: 'http://localhost:7878/api/v3/',
  apiKey: () => read().ApiKey,
})

export default client
