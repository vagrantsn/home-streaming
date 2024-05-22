import fs from 'fs';
import path from 'path';
import * as sonarr from '../services';
import paths from '../paths';
import { retryPromise } from '../../../request/retry';

const fileExists = (path: string) => new Promise((resolve, reject) => {
  const exists = fs.existsSync(path)

  if (exists) {
    return resolve(1)
  }

  return reject()
})

export const run = async () => Promise.all([
  sonarr.health.status({ retry: true }),
  retryPromise(() => fileExists(paths.config.file)),
  retryPromise(() => fileExists(path.resolve(paths.config.folder, 'sonarr.db'))),
])
