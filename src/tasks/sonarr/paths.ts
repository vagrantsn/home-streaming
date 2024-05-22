import path from 'path'
import { root } from '../../paths'

const paths = {
  base: path.resolve(root, 'containers/sonarr'),
  config: {
    folder: path.resolve(root, 'containers/sonarr'),
    baseFile: path.resolve(root, 'configs/sonarr/config.xml'),
    file: path.resolve(root, 'containers/sonarr/config.xml'),
  },
}

export default paths
