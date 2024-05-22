import { RequestOptions } from '../../../../request'
import { list } from './list'
import { remove } from './remove'

export const removeAll = async (options?: RequestOptions) => {
  const clients = await list(options)

  const ids = clients?.map(({ id }) => id)
  return remove({
    ids
  }, options)
}
