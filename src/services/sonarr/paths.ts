import path from 'path'
import { root } from '../../paths'

const paths = {
  base: path.resolve(root, 'containers/sonarr'),
  config: {
    folder: path.resolve(root, 'containers/sonarr'),
    file: path.resolve(root, 'containers/sonarr/config.xml'),
  },
}

export default paths
