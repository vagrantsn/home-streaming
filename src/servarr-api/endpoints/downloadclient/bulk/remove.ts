import requests, { RequestParams } from "@servarr-api/rest"

type DownloadClientPayload = {
  ids?: number[]
}

export const remove = (params: RequestParams<DownloadClientPayload>) => requests.delete<void>({
  ...params,
  path: 'downloadclient/bulk',
})
