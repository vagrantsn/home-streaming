import { RequestHandler, RequestParams } from '@servarr-api/rest'

type ClientOptions = {
  host: string
  apiKey: () => string
}

const isRequestHandler = (value: unknown): value is RequestHandler => value instanceof Function

const getHandler = <T extends Record<string, unknown>>(client: ClientOptions): ProxyHandler<T> => ({
  get(target, prop, receiver) {
    if (typeof prop !== 'string') return Reflect.get(target, prop, receiver)

    const value = target[prop]
    const isFunction = isRequestHandler(value)
    const isObject = typeof value === 'object' && Object.keys(value).length > 0

    if (isObject) return new Proxy(value, getHandler<T>(client))

    if (!isFunction) return Reflect.get(target, prop, receiver)

    return (params: RequestParams) => {
      const args = {
        ...params,
        host: client.host,
        headers: () => ({
          ...params?.headers,
          'X-Api-Key': client.apiKey(),
        }),
      }

      return value(args)
    }
  }
})

const buildClient = <T extends Record<string, unknown>>(services: T) => (options: ClientOptions) => {
  const handler = getHandler<T>(options)

  const proxiedServices = new Proxy(services, handler)
  return proxiedServices
}

export default buildClient
