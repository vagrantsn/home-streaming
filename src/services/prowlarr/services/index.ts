import { prowlarr } from '@servarr-api'

import { read } from '../config'

const client = prowlarr({
  host: 'http://localhost:9696/api/v1/',
  apiKey: () => read().ApiKey,
})

export default client
