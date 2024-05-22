import path from 'path'
import { root } from '../../paths'

const paths = {
  base: path.resolve(root, 'containers/radarr'),
  config: {
    folder: path.resolve(root, 'containers/radarr'),
    file: path.resolve(root, 'containers/radarr/config.xml'),
  },
}

export default paths
