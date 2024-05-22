import { list } from './list'
import { remove } from './remove'

export const removeAll = async () => {
  const applications = await list()

  const ids = applications?.map(({ id }) => id)
  return remove({
    ids
  })
}
