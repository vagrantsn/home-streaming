import { RequestParams } from '@servarr-api/rest'

import { list } from './list'
import { remove } from './bulk'

export const removeAll = async (params?: Omit<RequestParams, 'path' | 'method'>) => {
  const clients = await list(params)

  const ids = clients?.map(({ id }) => id)
  return remove({
    ...params,
    body: {
      ids,
    },
  })
}
