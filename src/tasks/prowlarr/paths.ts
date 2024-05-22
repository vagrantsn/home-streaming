import path from 'path'
import { root } from '../../paths'

const paths = {
  base: path.resolve(root, 'containers/prowlarr'),
  config: {
    folder: path.resolve(root, 'containers/prowlarr'),
    baseFile: path.resolve(root, 'configs/prowlarr/config.xml'),
    file: path.resolve(root, 'containers/prowlarr/config.xml'),
  },
}

export default paths
