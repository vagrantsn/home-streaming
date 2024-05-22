import requests, { RequestParams } from "@servarr-api/rest"

import { DownloadClient } from "./types"

export type DownloadClientPayload = Omit<DownloadClient, 'id'>
export type DownloadClientResponse = DownloadClient

export const create = (params: RequestParams<DownloadClientPayload>) => requests.post<DownloadClientResponse>({
  ...params,
  path: 'downloadclient',
})
