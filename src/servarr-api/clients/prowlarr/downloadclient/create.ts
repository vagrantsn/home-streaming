import requests, { ApiError, RequestParams } from "@servarr-api/rest"

import { DownloadClient } from "./types"

export type DownloadClientPayload = Omit<DownloadClient, 'id'>
export type DownloadClientResponse = DownloadClient

export const create = async (params: RequestParams<DownloadClientPayload>) => {
  try {
    const response = await requests.post<DownloadClientResponse>({
      ...params,
      path: 'downloadclient',
    })

    return response
  } catch (e) {
    const error: ApiError = e

    const isDuplicateError = error.status === 400 && /should be unique/i.test(error.message)

    if (!isDuplicateError) {
      throw error
    }
  }
}
