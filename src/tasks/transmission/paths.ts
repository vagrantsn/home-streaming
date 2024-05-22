import path from 'path'

import { root } from '../../paths'

const paths = {
  base: path.resolve(root, 'containers/transmission'),
  config: {
    folder: path.resolve(root, 'containers/transmission'),
    baseFile: path.resolve(root, 'configs/transmission/settings.json'),
    file: path.resolve(root, 'containers/transmission/settings.json'),
  },
}

export default paths
