import requests, { RequestParams } from '@servarr-api/rest'
import { HostConfig } from './types'

type HostConfigPayload = Partial<HostConfig>
type HostConfigResponse = HostConfig

export const update = (params: RequestParams<HostConfigPayload>) => requests.put<HostConfigResponse>({
  ...params,
  path: 'config/host',
})
