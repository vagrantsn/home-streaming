import fs from 'fs';
import path from 'path';
import * as sonarr from '../services';
import paths from '../paths';

const retryUntilResolve = async (
  request: () => Promise<any>,
  interval: number = 1000,
  timeout: number = 10000,
) => {
  const startedAt = new Date()

  const retry = async (): Promise<any> => {
    const timeDiff = new Date().getTime() - startedAt.getTime()
    const isTimedOut = timeDiff >= timeout

    if (isTimedOut) return

    try {
      await request()
    } catch {
      await new Promise(resolve => setTimeout(() => resolve(0), interval))
      return retry()
    }
  }

  return retry()
}

const fileExists = (path: string) => new Promise((resolve, reject) => {
  const exists = fs.existsSync(path)

  if (exists) {
    return resolve(1)
  }

  return reject()
})

export const run = async () => {
  await Promise.all([
    retryUntilResolve(() => sonarr.health.status()),
    retryUntilResolve(() => fileExists(paths.config.file)),
    retryUntilResolve(() => fileExists(path.resolve(paths.config.folder, 'sonarr.db'))),
  ])
};
