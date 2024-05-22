import path from 'path'

import { root } from '../../paths'

const paths = {
  qbittorrent: path.resolve(root, 'containers/qbittorrent'),
  configFolder: path.resolve(root, 'containers/qbittorrent/config'),
  configFile: path.resolve(root, 'containers/qbittorrent/qBittorrent.conf'),
}

export default paths
