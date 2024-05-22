import * as prowlarr from '../services';

const retryUntilSuccess = async (
  request: () => Promise<any>,
  interval: number = 2000,
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

export const run = async () => {
  await retryUntilSuccess(() => prowlarr.health.status())
};
