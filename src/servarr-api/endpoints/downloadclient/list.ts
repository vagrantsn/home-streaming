import requests, { RequestParams } from "@servarr-api/rest"

import { DownloadClient } from "./types"

type DownloadClientResponse = DownloadClient[]

export const list = (params?: RequestParams) => requests.get<DownloadClientResponse>({
  ...params,
  path: 'downloadclient',
})
