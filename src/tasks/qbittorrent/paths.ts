import path from 'path'

import { root } from '../../paths'

const paths = {
  base: path.resolve(root, 'containers/qbittorrent'),
  config: {
    folder: path.resolve(root, 'containers/qbittorrent/qBittorrent'),
    baseFile: path.resolve(root, 'configs/qbittorrent/qBittorrent.conf'),
    file: path.resolve(root, 'containers/qbittorrent/qBittorrent/qBittorrent.conf'),
  },
}

export default paths
