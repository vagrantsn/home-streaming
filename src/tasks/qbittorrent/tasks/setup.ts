import { ApiError } from '../../../request';
import * as prowlarr from '../../prowlarr/services';

export const run = async () => {
  try {
    await prowlarr.downloadClient.create({
      name: 'qBittorrent',
      implementation: 'QBittorrent',
      implementationName: 'qBittorrent',
      configContract: 'QBittorrentSettings',
      fields: {
        host: 'qbittorrent',
        port: 8080,
        username: 'admin',
      }
    })
  } catch (e) {
    const error: ApiError = e
    const errors = error.body

    const isUniqueError = errors?.some((e: { errorMessage: string }) => /should be unique/i.test(e.errorMessage))

    if (!isUniqueError) throw e
  }
}
