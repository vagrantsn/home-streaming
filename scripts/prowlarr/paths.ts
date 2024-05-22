import path from 'path'

const root = path.resolve(__dirname, '../../')

const paths = {
  base: path.resolve(root, 'containers/prowlarr'),
  config: {
    folder: path.resolve(root, 'containers/prowlarr/config'),
    baseFile: path.resolve(root, 'containers/prowlarr/config.xml'),
    file: path.resolve(root, 'containers/prowlarr/config/config.xml'),
  },
}

export default paths
