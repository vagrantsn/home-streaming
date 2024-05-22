import requests, { RequestParams } from "@servarr-api/rest"

import { Application } from "./types"

type ApplicationsResponse = Application[]

export const list = (params?: Omit<RequestParams, 'path'>) => requests.get<ApplicationsResponse>({
  ...params,
  path: 'applications',
})
