import requests, { RequestParams } from '@servarr-api/rest'
import { HostConfig } from './types'

type HostConfigResponse = HostConfig

export const details = (params?: RequestParams) => requests.get<HostConfigResponse>({
  ...params,
  path: 'config/host',
})
