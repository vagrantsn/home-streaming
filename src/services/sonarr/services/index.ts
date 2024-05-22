import { sonarr } from '@servarr-api'

import { read } from '../config'

const client = sonarr({
  host: 'http://localhost:8989/api/v3/',
  apiKey: () => read().ApiKey,
})

export default client
