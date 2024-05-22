import { RequestOptions } from '../../../../request'
import { list } from './list'
import { remove } from './remove'

export const removeAll = async (options?: RequestOptions) => {
  const applications = await list(options)

  const ids = applications?.map(({ id }) => id)
  return remove({
    ids
  }, options)
}
