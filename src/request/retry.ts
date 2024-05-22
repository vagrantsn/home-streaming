export type RetryConfig = {
  interval?: number;
  timeout?: number;
}

export const retryPromise = async <T>(
  request: () => Promise<T>,
  options?: RetryConfig
) => {
  const { timeout = 20000, interval = 2000 } = options || {}
  const startedAt = new Date()

  const retry = async (): Promise<T> => {
    const timeDiff = new Date().getTime() - startedAt.getTime()

    try {
      const response = await request()
      return response
    } catch (e) {
      const isTimedOut = timeDiff >= timeout

      if (isTimedOut) {
        throw e;
      }

      await new Promise(resolve => setTimeout(() => resolve(0), interval))
      return retry()
    }
  }

  return retry()
}
