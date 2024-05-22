import fs from 'fs'
import path from 'path'
import { retryPromise } from '@servarr-api/retry'

import radarr from '../services'
import paths from '../paths'

const fileExists = (path: string) => new Promise((resolve, reject) => {
  const exists = fs.existsSync(path)

  if (exists) {
    return resolve(1)
  }

  return reject()
})

export const run = async () => {
  await retryPromise(() => fileExists(paths.config.file))
  await retryPromise(() => fileExists(path.resolve(paths.config.folder, 'radarr.db')))

  await radarr.health.details({ retry: true })
}
