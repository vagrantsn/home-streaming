import { read } from '../../../../yaml'
import * as services from "../../services";

const removeAll = async () => {
  const downloadClients = await services.downloadClient.list()

  const ids = downloadClients.map(({ id }) => id)
  await services.downloadClient.remove({
    ids,
  })
}

const addDownloadClients = async () => {
  const { prowlarr } = read()

  await removeAll()

  const promises = prowlarr.downloadClients.map(
    payload => services.downloadClient.create(payload)
  )

  await Promise.all(promises)
}

export const run = async () => {
  await addDownloadClients()
}
