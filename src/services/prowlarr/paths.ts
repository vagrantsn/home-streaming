import path from 'path'
import { root } from '../../paths'

const paths = {
  base: path.resolve(root, 'containers/prowlarr'),
  config: {
    folder: path.resolve(root, 'containers/prowlarr'),
    file: path.resolve(root, 'containers/prowlarr/config.xml'),
  },
}

export default paths
