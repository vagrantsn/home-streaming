import requests, { RequestParams } from "@servarr-api/rest"

type HealthResource = {
  id: number
  source?: string
  type: 'ok' | 'notice' | 'warning' | 'error'
  message?: string
  wikiUrl: Partial<{
    fullUri: string
    scheme: string
    host: string
    port: number
    path: string
    query: string
    fragment: string
  }>
}

export const details = (params?: RequestParams) => requests.get<HealthResource>({
  ...params,
  path: 'health',
})
