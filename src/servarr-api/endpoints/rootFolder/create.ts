import requests, { ApiError, RequestParams } from '@servarr-api/rest'

export const create = async (params: RequestParams<{ path: string }>) => {
  try {
    await requests.post({
      ...params,
      path: 'rootFolder',
    })
  } catch (e) {
    const error: ApiError = e
    const isDuplicateError = error.status === 400 && /already configured as a root folder/i.test(error.message)

    if (!isDuplicateError) {
      throw e
    }
  }
}
