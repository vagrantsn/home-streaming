import { list } from './list'
import { remove } from './remove'

export const removeAll = async () => {
  const clients = await list()

  const ids = clients?.map(({ id }) => id)
  return remove({
    ids
  })
}
